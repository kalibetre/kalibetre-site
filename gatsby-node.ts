import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode = ({ node, getNode, actions }: any) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode }).replace(/^\/|\/$/g, '');
        createNodeField({
            name: `slug`,
            node,
            value: `/${node.frontmatter.type}/${value}`,
        });
    } else if (node.internal.type === 'ProjectsYaml' && node.hasBlog) {
        const value = createFilePath({ node, getNode }).replace(/^\/|\/$/g, '');
        createNodeField({
            name: `blogUrl`,
            node,
            value: `/blog/${value}`,
        });
    }
};
