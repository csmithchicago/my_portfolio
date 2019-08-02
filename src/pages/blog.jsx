import React from "react";
import { Link, graphql , StaticQuery} from "gatsby";
import { css } from "@emotion/core"
import styled  from 'styled-components'
import tw from 'tailwind.macro'


// Components
import BlogLayout from '../components/BlogLayout'
import {BigTitle, Par, StyledDiv, StyledBackgroundImage} from '../templates/blog-post'

const Footer = styled.footer`
  ${tw`text-center text-grey absolute bottom-0 p-6 font-sans text-md lg:text-lg`};
  margin: "0 auto";
`

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
      contentfulAsset(id: {eq: "a6d93e70-fdad-55fa-bceb-33fba383ff3a"}){
        description
        fluid(maxWidth: 2048, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }`}
    render={ data => (
      <BlogLayout>
      <StyledBackgroundImage
        alt={data.contentfulAsset.description}
        fluid={data.contentfulAsset.fluid}
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