import React from "react";
import { Link, graphql , StaticQuery} from "gatsby";
import { css } from "@emotion/core"
import styled  from 'styled-components'
import tw from 'tailwind.macro'


// Components
import BlogLayout from '../components/BlogLayout'
import {Footer, BigTitle, Par, StyledDiv, StyledBackgroundImage} from '../templates/blog-post'

export const StyledLink = styled(Link)`
    ${tw`text-white text-center`};
    text-decoration: none;
    &:hover {
        ${tw`underline`};
        text-decoration-color: #e07628;
    };
`;

const BlogPage = () => (
  <StaticQuery
    query={graphql`
    query{
      allContentfulBlogPost {
        totalCount
        edges {
          node {
            id
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            childContentfulBlogPostDescriptionTextNode {
              childMarkdownRemark {
                excerpt
              }
            }
          }
        }    
      }
      contentfulBlogPost(id: {eq: "1644bef8-2528-50db-8d5e-c6952209f942"}) {
        title
        heroImage{
          fluid(maxWidth: 2048, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        publishDate(formatString: "MMMM Do, YYYY")
        body{
          childMarkdownRemark{
            html
          }
        }
      }
    }`}
    render={ data => (
      <BlogLayout>
      <StyledBackgroundImage 
        alt={data.contentfulBlogPost.heroImage.description} 
        fluid={data.contentfulBlogPost.heroImage.fluid}
      />

    <StyledDiv>
      <h1 style={{borderBottom: "1px solid", textAlign: "center",
                  fontFamily: 'Cormorant Garamond', fontWeight: "700"
                  }}
      > 
        Recent Posts 
      </h1>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink to={`/blog/${node.slug}/`}>
              <h3 style={{ fontFamily: 'Cormorant SC', fontWeight: "700"}}>
                {node.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.publishDate}
                </span>
              </h3>
            </StyledLink>
            <p>{node.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt}</p>
          </div>
        ))}
    </StyledDiv>

    <Footer>
      &copy; 2019 by Corey Smith.{' '}
    </Footer>      
    </BlogLayout>
    )}
  />
);

export default BlogPage;