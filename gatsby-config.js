module.exports = {
  siteMetadata: {
    title: `Calorie Planning`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [    
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
}
