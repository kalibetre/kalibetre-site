import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Hero from '../components/Hero';
import PageLayout from '../components/PageLayout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <Hero />
        </PageLayout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
