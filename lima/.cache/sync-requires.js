const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-contador-js": hot(preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/DevPleno/FullStackMaster/DevPleno-Workshop-Gatsby/lima/src/templates/contador.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/DevPleno/FullStackMaster/DevPleno-Workshop-Gatsby/lima/src/pages/index.js")))
}

