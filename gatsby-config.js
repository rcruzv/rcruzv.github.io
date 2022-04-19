module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "A starter blog demonstrating what Gatsby can do.",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    "gatsby-plugin-stylus",
  ],
}
