const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Corey Smith - Personal Portfolio', // Navigation and Site Title
  siteTitleAlt: 'CoreySmith', // Alternative Site title for SEO
  siteTitleShort: 'CoreySmith', // short_name for manifest
  siteHeadline: 'Projects that I have made', // Headline for schema.org JSONLD
  siteUrl: 'https://www.coreydeon.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal portfolio for Corey Smith.',
  author: 'CoreySmith', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-137808710-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
