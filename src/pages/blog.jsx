import React from "react";
import { Link, graphql , StaticQuery} from "gatsby";
import Img from 'gatsby-image'

// Components
import BlogLayout from '../components/BlogLayout'

const BlogPage = () => (
  <StaticQuery
    query={graphql`
    query{
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            id
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
        publishDate
        body{
          childMarkdownRemark{
            html
          }
        }
      }
    }`}
    render={ data => (
      <BlogLayout>
        <h1>{data.contentfulBlogPost.title}</h1>
        <small>{data.contentfulBlogPost.publishDate} </small>
        <Img fluid={data.contentfulBlogPost.heroImage.fluid} />
        <p>{data.contentfulBlogPost.body.childMarkdownRemark.excerpt}</p>
      </BlogLayout>
    )}
  />
);

export default BlogPage;