var plugins = [{
      plugin: require('/home/matt/dev/hostile-design/node_modules/gatsby-plugin-react-leaflet/gatsby-ssr'),
      options: {"plugins":[],"linkStyles":true},
    },{
      plugin: require('/home/matt/dev/hostile-design/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('/home/matt/dev/hostile-design/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/matt/dev/hostile-design/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"createLinkInHead":true},
    },{
      plugin: require('/home/matt/dev/hostile-design/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Unfrl","short_name":"Unfrl","start_url":"/","background_color":"#303030","theme_color":"#212121","display":"standalone","icon":"src/assets/logo.png"},
    },{
      plugin: require('/home/matt/dev/hostile-design/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
