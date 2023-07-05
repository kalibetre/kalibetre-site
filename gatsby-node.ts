import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode }).replace(/^\/|\/$/g, '');
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
