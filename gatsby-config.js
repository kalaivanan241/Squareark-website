module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    siteUrl: `https://gatsby-theme-i18n-react-intl.netlify.app`,
    title: 'gatsby-theme-i18n-react-intl',
    description: `Default example for i18n with react-intl`,
    author: `LekoArts`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./src/i18n/locales/en.json`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./src/i18n/config.json`),
      },
    },
  ],
};
