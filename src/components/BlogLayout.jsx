import React from 'react'
import Navigation from './Navigation'
import Layout from './Layout'

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
      <Layout />
        <Navigation />
        {children}

        {/* <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div> */}
      </>
    )
  }
}

export default BlogLayout
