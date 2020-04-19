module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: { extensions: ['.mdx', '.md'] }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'yaml-i18n',
      },
    },
    { 
      resolve: 'gatsby-plugin-yaml-i18n',
      options: {
        locales: ['en', 'de'],
      }
    },
  ],
}
