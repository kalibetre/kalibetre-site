import React from 'react';

type SocialLinkProps = {
    href: string;
    children: React.ReactNode;
};

const SocialLink: React.FC<SocialLinkProps> = (props) => {
    const { href, children } = props;
    return (
        <div className="h-8 w-8 rounded-full border-2 border-transparent hover:ring-2 hover:ring-teal-400 sm:h-9 sm:w-9">
            <a className="h-full w-full" href={href} target="_blank">
                {children}
            </a>
        </div>
    );
};

export default SocialLink;
