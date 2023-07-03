import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

type ProjectCardProps = {
    slug: string;
    title: string;
    desc: string;
    image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { slug, title, desc, image } = props;

    const getHeroImage = (imageUrl: any, alt: string) => {
        const image = getImage(imageUrl);
        if (!image) {
            return null;
        }
        return (
            <GatsbyImage
                image={image}
                alt={alt}
                className="h-auto w-full rounded-md"
            />
        );
    };

    return (
        <Link to={`/projects/${slug}`}>
            <div
                key={slug}
                className="group flex w-full flex-col justify-between rounded-md p-2 shadow-teal-400 hover:shadow-lg dark:hover:shadow-slate-500"
            >
                <div className="mb-4">
                    <h2 className="text-md group-hover:text-teal-600">
                        {title}
                    </h2>
                    <h3 className="text-xs text-slate-400 line-clamp-2">
                        {desc}
                    </h3>
                </div>
                {getHeroImage(image, title)}
            </div>
        </Link>
    );
};

export default ProjectCard;
