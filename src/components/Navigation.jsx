import React from 'react'
import Header from './Header'
import { StaticQuery, graphql } from "gatsby"


const Navigation = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
             menuLinks {
               name
               link
             }
          }
        }
      }
    `}
    render={data => (
       <Header menuLinks={data.site.siteMetadata.menuLinks} />
    )}
  />
)

export default Navigation

