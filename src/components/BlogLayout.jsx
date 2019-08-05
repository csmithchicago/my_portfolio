import React from 'react'
import Layout from './Layout'

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
    <>
    <Layout />
      <div>
        {children}
      </div>
    </>
    )
  }
}

export default BlogLayout
