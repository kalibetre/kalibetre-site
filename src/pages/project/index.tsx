import { HeadFC, PageProps, graphql } from 'gatsby';
import React from 'react';
import PageHead from '../../components/PageHead';
import PageLayout from '../../components/PageLayout';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';
import GitHubIcon from '../../components/icons/GitHubIcon';

const Projects: React.FC<PageProps<Queries.ProjectsQuery>> = ({ data }) => {
    const { nodes } = data.allMdx;

    return (
        <PageLayout>
            <PageTitle
                title="Projects"
                subtitle="Here are my open source projects that showcase my tech stacks"
            >
                <a
                    href="https://github.com/kalibetre"
                    target="_blank"
                    className="my-4 flex w-36 items-center justify-center gap-2 rounded-lg border-[0.5px] border-slate-400 p-1 text-xs hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
                >
                    <div className="h-6 w-6">
                        <GitHubIcon />
                    </div>
                    <span>View on GitHub</span>
                </a>
            </PageTitle>
            <div className="grid grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
                {nodes.map(
                    (node: any) =>
                        node.frontmatter && (
                            <ProjectCard
                                key={node.fields.slug}
                                {...node.frontmatter}
                                {...node.fields}
                            />
                        )
                )}
            </div>
        </PageLayout>
    );
};

export default Projects;

export const Head: HeadFC = () => <PageHead title="Projects" />;

export const query = graphql`
    query Projects {
        allMdx(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { type: { eq: "project" } } }
        ) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    desc
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`;
