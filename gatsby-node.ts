import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode = ({ node, getNode, actions }: any) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        console.log(node.frontmatter.type);
        const value = createFilePath({ node, getNode }).replace(/^\/|\/$/g, '');
        createNodeField({
            name: `slug`,
            node,
            value: `/${node.frontmatter.type}/${value}`,
        });
    }
};
