import { Link } from 'gatsby';
import React from 'react';

type PageLinkProps = {
    to: string;
    children: React.ReactNode;
};

const PageLink: React.FC<PageLinkProps> = (props) => {
    const { to, children } = props;
    return (
        <div className="flex h-10 flex-col">
            <Link
                to={to}
                className="peer flex h-full w-full items-center justify-center p-2 text-sm uppercase hover:text-teal-700"
            >
                {children}
            </Link>
            <span className="block h-[2px] w-full scale-0 bg-teal-700 transition ease-in-out peer-hover:scale-100"></span>
        </div>
    );
};

export default PageLink;
