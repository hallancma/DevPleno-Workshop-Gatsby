// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-contato-js": () => import("./../src/pages/contato.js" /* webpackChunkName: "component---src-pages-contato-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

