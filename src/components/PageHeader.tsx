import React, { useEffect } from 'react';
import PageLink from './PageLink';
import SearchButton from './SearchButton';
import DarkModeIcon from './icons/DarkModeIcon';
import HomeLinkIcon from './icons/HomeLinkIcon';
import LightModeIcon from './icons/LightModeIcon';

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
    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }
    });

    return (
        <header>
            <nav className="flex justify-between">
                <PageLink to="/">
                    <HomeLinkIcon />
                </PageLink>
                <div className="flex items-center justify-center">
                    {PAGE_LINKS.map(({ label, link }) => (
                        <PageLink key={label} to={link}>
                            <span className="p-2">{label}</span>
                        </PageLink>
                    ))}
                    <button
                        className="ml-2 h-6 w-6 rounded-full"
                        onClick={toggleTheme}
                    >
                        <div className="h-full w-full rounded-full p-[2px] ring-slate-500 hover:ring-2">
                            <span className="hidden dark:block">
                                <LightModeIcon />
                            </span>
                            <span className="block dark:hidden">
                                <DarkModeIcon />
                            </span>
                        </div>
                    </button>
                </div>
            </nav>
            <div className="mb-10 mt-4 flex items-center justify-start">
                <SearchButton />
            </div>
        </header>
    );
};

export default PageHeader;
