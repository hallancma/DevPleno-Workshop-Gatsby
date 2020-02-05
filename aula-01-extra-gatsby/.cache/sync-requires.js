const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contato-js": hot(preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/DevPleno/FullStackMaster/DevPleno-Workshop-Gatsby/aula-01-extra-gatsby/src/pages/contato.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Applications/XAMPP/xamppfiles/htdocs/DevPleno/FullStackMaster/DevPleno-Workshop-Gatsby/aula-01-extra-gatsby/src/pages/index.js")))
}

