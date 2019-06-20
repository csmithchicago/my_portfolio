

exports.onClientEntry = () => {  
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  checkHash(location)
}

const checkHash = location => {
  let hash = location.hash
  if (hash) {
    scrollToElement(hash, {
      offset: -90,
      duration: 1000,
    })
  }
}
  