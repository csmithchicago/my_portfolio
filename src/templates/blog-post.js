import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import BlogLayout from '../components/BlogLayout'
import styled  from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import tw from 'tailwind.macro'

import heroStyles from './blog-post.module.css'

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const BigTitle = styled.h1`
  ${tw`text-white mt-3`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 7vw;
  white-space: nowrap;
  text-align: center;
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  letter-spacing: 2px;
  padding-right: 2rem;

`
const Par = styled.p`
  ${tw`text-white size-6xl text-center`};
  margin: "0 auto";
  max-width: 960;
  /* padding-top: 1em; */
  font-size: 2vw;
`;

const StyledDiv = styled.div`
  ${tw`text-white`};
  margin: '0 auto';
  max-width: 960;
  padding-top: 0;
  font-size: 2.25vw;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')

    return (
      <BlogLayout>
          <StyledBackgroundImage 
            alt={post.title} 
            fluid={post.heroImage.fluid}
            style={{ margin: "0 auto" }} />

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
      {/* <Footer>
        &copy; 2019 by Corey Smith.{' '}
      </Footer>       */}
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

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  max-width: 960px;
  background-position: center;
  background-size: cover;
  height: 70vh;
  max-height: 800px;
  /* justify-content: center; */
  /* align-items: center; */

  /* position: relative; */
  /* text-align: center; */
  margin: "0 auto";

`;
