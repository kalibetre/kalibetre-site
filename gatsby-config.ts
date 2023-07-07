import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config();

const config: GatsbyConfig = {
    siteMetadata: {
        title: `kalibetre`,
        description: `My personal website where I showcase my projects and share idea with my blogs`,
        twitterUsername: `@kalibetre`,
        image: `/kalibetre-og.jpg`,
        siteUrl: `https://www.kalibetre.com`,
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-yaml-full',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blogs',
                path: `${__dirname}/content/blogs/`,
            },
            __key: 'blogs',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/content/projects/`,
            },
            __key: 'projects',
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
              gatsbyRemarkPlugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 1200,
                  },
                },
                `gatsby-remark-embedder`,
                `gatsby-remark-prismjs`,
                `gatsby-remark-gifs`,
              ],
            },
          },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries: require('./src/utils/algolia-queries'),
            },
        },
    ],
};

export default config;
