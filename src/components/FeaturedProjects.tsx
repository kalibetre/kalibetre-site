import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import GroupTitle from './GroupTitle';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { frontmatter: { date: DESC } }
                filter: {
                    frontmatter: {
                        type: { eq: "project" }
                        featured: { eq: true }
                    }
                }
            ) {
                nodes {
                    frontmatter {
                        slug
                        date(formatString: "MMMM D, YYYY")
                        title
                        desc
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);

    const { nodes } = data.allMdx;

    return (
        <>
            <GroupTitle title="Featured Projects" />
            <div className="grid grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
                {nodes.map(
                    (node: any) =>
                        node.frontmatter && (
                            <ProjectCard
                                key={node.frontmatter.slug}
                                {...node.frontmatter}
                            />
                        )
                )}
            </div>
        </>
    );
};

export default FeaturedProjects;
