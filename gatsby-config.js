module.exports = {
  siteMetadata: {
    title: "Hostile.Design",
    siteUrl: "https://hostile.design",
    description: "Custom Software Design & Development",
    author: "Unfrl",
    publisher: "Unfrl",
    icon: "src/assets/favicon.ico",
    keywords: [
      "software",
      "development",
      "custom",
      "custom apps",
      "engineering",
      "progressive web app",
      "PWA"
    ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hostile.Design",
        short_name: "Hostile.Design",
        start_url: "/",
        background_color: "#303030",
        theme_color: "#212121",
        display: "standalone",
        icon: "src/assets/logo.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
