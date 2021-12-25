

module.exports = {
  pathPrefix: "/upcoming",
  siteMetadata: {
    title: `Upcoming Titles`,
    description: 'List of upcoming titles',
    author: '@psykzz',
    siteUrl: `https://psykzz.github.io/upcoming/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/games`,
        name: `upcomingGames`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-nprogress",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
}
