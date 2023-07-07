import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import GroupTitle from "./GroupTitle";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsYaml(
        sort: { date: DESC }
        filter: { featured: { eq: true } }
      ) {
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
  `);

  const { nodes } = data.allProjectsYaml;

  return (
    <>
      <GroupTitle title="Featured Projects" />
      <div className="grid grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-3">
        {nodes.map((node: any) => (
          <ProjectCard key={node.url} {...node} {...node.fields} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProjects;
