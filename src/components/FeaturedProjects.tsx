import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
    const data = useStaticQuery(graphql`
        query ProjectsListQuery {
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
            <div className="my-4 flex items-center justify-center">
                <span className="block h-[1px] w-full flex-1 bg-slate-100 dark:bg-slate-700" />
                <span className="px-6 text-xs text-slate-500">
                    Featured Projects
                </span>
                <span className="block h-[1px] w-full flex-1 bg-slate-100 dark:bg-slate-700" />
            </div>
            <div className="flex flex-wrap gap-3">
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
