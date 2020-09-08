module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Thomas Chaplin","short_name":"Thomas Chaplin","start_url":"/","background_color":"#304CFD","theme_color":"#304CFD","display":"standalone","icon":"src/images/icon.png","legacy":true,"cache_busting_mode":"query","include_favicon":true,"theme_color_in_head":true,"cacheDigest":"956b96ad664dfe666c5d562420d8f703"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1000,"quality":80,"showCaptions":true,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"","head":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"black","showSpinner":true},
    }]
