import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import BlogItem from './BlogItem';

const FeaturedBlogs = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { frontmatter: { date: DESC } }
                filter: {
                    frontmatter: {
                        type: { eq: "blog" }
                        featured: { eq: true }
                    }
                }
            ) {
                nodes {
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        desc
                    }
                    fields {
                        slug
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
                    Featured Blogs
                </span>
                <span className="block h-[1px] w-full flex-1 bg-slate-100 dark:bg-slate-700" />
            </div>
            <div className="relative flex">
                <div className="absolute left-[6px] mt-6 h-full w-6 border-l-[0.5px] border-slate-300 dark:border-slate-600"></div>
                <div className="ml-[24px] flex w-full flex-col justify-center gap-3">
                    {nodes.map(
                        (node: any) =>
                            node.frontmatter && (
                                <BlogItem
                                    key={node.fields.slug}
                                    {...node.frontmatter}
                                    {...node.fields}
                                />
                            )
                    )}
                </div>
            </div>
        </>
    );
};

export default FeaturedBlogs;
