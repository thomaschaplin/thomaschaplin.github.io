const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": hot(preferDefault(require("/Users/thomaschaplin/GIT/thomaschaplin/thomaschaplin.github.io/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thomaschaplin/GIT/thomaschaplin/thomaschaplin.github.io/.cache/dev-404-page.js")))
}

