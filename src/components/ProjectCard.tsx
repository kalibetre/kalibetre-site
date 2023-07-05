import { Link } from 'gatsby';
import React from 'react';
import GatsbyImageWrapper from './GatsbyImageWrapper';

type ProjectCardProps = {
    slug: string;
    title: string;
    desc: string;
    image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { slug, title, desc, image } = props;

    return (
        <Link to={`/project/${slug}`}>
            <div
                key={slug}
                className="group flex w-full flex-col justify-between rounded-md p-4 shadow-teal-400 hover:shadow-lg dark:hover:shadow-slate-500"
            >
                <div className="mb-4">
                    <h2 className="text-lg line-clamp-2 group-hover:text-teal-600">
                        {title}
                    </h2>
                    <h3 className="text-sm text-slate-400 line-clamp-2">
                        {desc}
                    </h3>
                </div>
                <GatsbyImageWrapper image={image} alt={title} />
            </div>
        </Link>
    );
};

export default ProjectCard;
