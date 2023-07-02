import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `kalibetre-site`,
        siteUrl: `https://www.kalibetre.com`,
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};

export default config;
