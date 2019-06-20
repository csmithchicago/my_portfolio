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
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          textSize: "1em"
        }}
      >
        {children}
      </div>
    </>
    )
  }
}

export default BlogLayout
