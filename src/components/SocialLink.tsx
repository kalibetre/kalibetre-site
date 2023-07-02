import React from 'react';

type SocialLinkProps = {
    href: string;
    children: React.ReactNode;
};

const SocialLink: React.FC<SocialLinkProps> = (props) => {
    const { href, children } = props;
    return (
        <div className="h-10 w-10 rounded-full border-2 border-transparent hover:ring-2 hover:ring-teal-400">
            <a className="h-full w-full" href={href} target="_blank">
                {children}
            </a>
        </div>
    );
};

export default SocialLink;
