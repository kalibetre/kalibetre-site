import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import PageHead from '../components/PageHead';
import PageLayout from '../components/PageLayout';

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <h1>Page not found</h1>
        </PageLayout>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <PageHead title="Not found" />;
