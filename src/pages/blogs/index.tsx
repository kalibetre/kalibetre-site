import { HeadFC } from 'gatsby';
import React from 'react';
import PageHead from '../../components/PageHead';
import PageLayout from '../../components/PageLayout';

const blogs = () => {
    return <PageLayout>Blogs Page</PageLayout>;
};

export default blogs;

export const Head: HeadFC = () => <PageHead title="Blogs" />;
