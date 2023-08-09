import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import PageHead from "../components/PageHead";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import GitHubIcon from "../components/icons/GitHubIcon";

const Projects: React.FC<PageProps<Queries.ProjectsQuery>> = ({ data }) => {
  const { nodes } = data.allProjectsYaml;

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
          rel="noreferrer"
        >
          <div className="h-6 w-6">
            <GitHubIcon />
          </div>
          <span>View on GitHub</span>
        </a>
      </PageTitle>
      <div className="grid grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
        {nodes.map((node: any) => (
          <ProjectCard key={node.url} {...node} {...node.fields} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;

export const Head: HeadFC = () => <PageHead title="Projects" />;

export const query = graphql`
  query Projects {
    allProjectsYaml(sort: { date: DESC }) {
      nodes {
        date(formatString: "MMMM D, YYYY")
        title
        desc
        url
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        fields {
          blogUrl
        }
      }
    }
  }
`;
