import { HeadFC } from 'gatsby';
import React from 'react';
import PageHead from '../components/PageHead';
import PageLayout from '../components/PageLayout';

const projects = () => {
    return <PageLayout>Projects Page</PageLayout>;
};

export default projects;

export const Head: HeadFC = () => <PageHead title="Projects" />;
