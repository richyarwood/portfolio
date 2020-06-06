module.exports = {
  siteMetadata: {
    title: 'Richard Yarwood - full stack JavaScript Developer',
    menuItems: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Posts',
        link: '/posts',
      },
      {
        name: 'Experience',
        link: '/experience',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'experience',
        path: `${__dirname}/src/experience/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
