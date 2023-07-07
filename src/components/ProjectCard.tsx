import { Link } from "gatsby";
import React from "react";
import GatsbyImageWrapper from "./GatsbyImageWrapper";

type ProjectCardProps = {
  date: string;
  title: string;
  desc: string;
  blogUrl: string;
  url: string;
  image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { date, title, desc, blogUrl, url, image } = props;

  const content = () => (
    <div className="group flex w-full flex-col justify-between rounded-md p-4 shadow-teal-400 hover:shadow-lg dark:hover:shadow-slate-500">
      <div className="mb-4">
        <h2 className="line-clamp-2 text-lg group-hover:text-teal-600">
          {title}
        </h2>
        <h3 className="line-clamp-2 text-sm text-slate-400">{desc}</h3>
      </div>
      <GatsbyImageWrapper image={image} alt={title} />
    </div>
  );

  return blogUrl ? (
    <Link to={blogUrl}>{content()}</Link>
  ) : (
    <a href={url} target="_blank">
      {content()}
    </a>
  );
};

export default ProjectCard;
