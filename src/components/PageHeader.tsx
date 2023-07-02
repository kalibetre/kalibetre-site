import React from 'react';
import PageLink from './PageLink';
import HomeLinkIcon from './icons/HomeLinkIcon';

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
                    <HomeLinkIcon />
                </PageLink>
                <div className="flex">
                    {PAGE_LINKS.map(({ label, link }) => (
                        <PageLink key={label} to={link}>
                            <span className="p-2">{label}</span>
                        </PageLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default PageHeader;
