import React from 'react'
// import { Link } from 'gatsby'
// import base from './base.css'
// import Container from './container'
// import Navigation from './navigation'

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
      <div>{children}</div>
      </>
      // <Container>
      //   <Navigation />
      //   {children}
      // </Container>
    )
  }
}

export default BlogLayout
