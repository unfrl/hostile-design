const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/matt/dev/hostile-design/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/matt/dev/hostile-design/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/home/matt/dev/hostile-design/src/pages/about.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/matt/dev/hostile-design/src/pages/index.tsx"))),
  "component---src-pages-process-tsx": hot(preferDefault(require("/home/matt/dev/hostile-design/src/pages/process.tsx"))),
  "component---src-pages-services-tsx": hot(preferDefault(require("/home/matt/dev/hostile-design/src/pages/services.tsx")))
}

