import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import get from 'lodash/get'
import BlogLayout from '../components/BlogLayout'
import styled  from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import tw from 'tailwind.macro'

import heroStyles from './blog-post.module.css'

const Footer = styled.footer`
  ${tw`text-center text-grey absolute bottom-0 p-6 font-sans text-md lg:text-lg`};
  margin: "0 auto";
`
export const BigTitle = styled.h1`
  ${tw`text-white mt-3 text-center`};
  font-size: 5rem;
  /* white-space: nowrap; */
  text-align: center;
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  padding-bottom: 2rem;

`
export const Par = styled.p`
  ${tw`text-white size-6xl text-center`};
  margin: "0 auto";
  max-width: 960;
  /* padding-top: 1em; */
  font-size: 1.5rem;
`;

export const StyledDiv = styled.div`
  ${tw`text-white`};
  margin: '0 auto';
  max-width: 960;
  padding-top: 0;
  font-size: 2rem;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 70vh;
  max-height: 800px;
  margin: "0 auto";
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    return (
      <BlogLayout>
          <StyledBackgroundImage
            alt={post.heroImage.description}
            fluid={post.heroImage.fluid}
          />

        <StyledDiv>
          <BigTitle >
            {post.title}
          </BigTitle>
        </StyledDiv>

        <Par style={{ display: 'block' }} >
          {post.publishDate}
        </Par>

        <StyledDiv
          style={{ width: "100%",
            maxWidth: "960px", margin: "0 auto", paddingBottom: "60px" }}
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html }}
        />
      <Footer>
        &copy; 2019 by Corey Smith.{' '}
      </Footer>
      </BlogLayout>
    )
  }
}
export default BlogPostTemplate


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        description
        fluid(maxWidth: 2048, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`