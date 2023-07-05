import React from 'react';
import PageHeader from '../components/PageHeader';

type PageLayoutProps = {
    children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const { children } = props;
    return (
        <div className="relative min-h-screen bg-white antialiased dark:bg-slate-900 dark:text-slate-100">
            <div className="custom-bg dark:custom-bg-drk pointer-events-none absolute inset-x-0 top-0 h-[350px] w-full opacity-30"></div>
            <div className="mx-4 md:mx-auto md:w-5/6 md:max-w-screen-lg">
                <PageHeader />
                <main>{children}</main>
                <footer className="mt-24 py-8 text-center text-xs dark:text-slate-300">
                    Kalkidan Betre &copy; 2023
                </footer>
            </div>
        </div>
    );
};

export default PageLayout;
