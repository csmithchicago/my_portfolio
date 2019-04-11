import React from "react";
import { Link, graphql , StaticQuery} from "gatsby";

// Components
import Layout from '../components/Layout'

const BlogPage = () => (
    <StaticQuery
      query={graphql`
      query{
        contentfulPerson {
            name
            shortBio {
            shortBio
            }
        }
      contentfulAsset{
        fluid {
            src
            }
        }
       }
      `}
      render={({
        contentfulAsset: {
            fluid: {src}
          },
          contentfulPerson: {
              shortBio: {shortBio}
          }

      }) => (
        <>
          <h1>My New Blog Page</h1>
          <small>Created on </small>
          <img src={src} />
          <p>{shortBio}</p>
          <Link to="/">Go Home</Link>
        </>
      )}
    />
  );

export default BlogPage;