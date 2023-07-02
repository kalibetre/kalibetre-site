import React from 'react';
import PageHeader from '../components/PageHeader';

type PageLayoutProps = {
    children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const { children } = props;
    return (
        <div className="mx-4 h-screen md:mx-auto md:w-5/6 md:max-w-screen-lg">
            <PageHeader />
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    );
};

export default PageLayout;
