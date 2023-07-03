import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

type GatsbyImageWrapperProps = {
    image: any;
    alt: string | null | undefined;
};

const GatsbyImageWrapper: React.FC<GatsbyImageWrapperProps> = (props) => {
    const { image, alt } = props;
    const imageData = getImage(image);
    if (!imageData) {
        return null;
    }
    return (
        <GatsbyImage
            image={imageData}
            alt={alt ?? ''}
            className="h-auto w-full rounded-md"
        />
    );
};

export default GatsbyImageWrapper;
