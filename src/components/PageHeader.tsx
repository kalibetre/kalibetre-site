import React from 'react';
import HomeLink from './HomeLink';
import PageLink from './PageLink';

const PAGE_LINKS = [
    {
        label: 'blogs',
        link: '/blogs',
    },
    {
        label: 'projects',
        link: '/projects',
    },
];

const PageHeader = () => {
    return (
        <header>
            <nav className="flex justify-between">
                <PageLink to="/">
                    <HomeLink />
                </PageLink>
                <div className="flex">
                    {PAGE_LINKS.map(({ label, link }) => (
                        <PageLink key={label} to={link}>
                            {label}
                        </PageLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default PageHeader;
