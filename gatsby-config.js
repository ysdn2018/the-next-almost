/*
  This is where you tell Gatsby what plugins you are using
*/
module.exports = {
  siteMetadata: {
    title: `the next base`,
  },
  pathPrefix: `/the-next-almost`,
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60215266-12",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 500,
               quality: 85,
               linkImagesToOriginal: false,
             },
           },
           {
             resolve: `gatsby-remark-responsive-iframe`,
             options: {
               wrapperStyle: `margin-bottom: 1.0725rem`,
             },
           },
           'gatsby-remark-copy-linked-files',
           'gatsby-remark-smartypants',
         ],
       },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ],
}
