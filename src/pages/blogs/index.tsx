import { HeadFC } from 'gatsby';
import React from 'react';
import PageHead from '../../components/PageHead';
import PageLayout from '../../components/PageLayout';
import PageTitle from '../../components/PageTitle';

const blogs = () => {
    return (
        <PageLayout>
            <PageTitle
                title="Blogs"
                subtitle="My technical writings and articles about tech and programming"
            />
        </PageLayout>
    );
};

export default blogs;

export const Head: HeadFC = () => <PageHead title="Blogs" />;
