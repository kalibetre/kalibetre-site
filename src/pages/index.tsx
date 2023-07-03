import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Hero from '../components/Hero';
import PageHead from '../components/PageHead';
import PageLayout from '../components/PageLayout';
import TechStack from '../components/TechStack';
import DjangoIcon from '../components/icons/DjangoIcon';
import ExpressIcon from '../components/icons/ExpressIcon';
import ReactJsIcon from '../components/icons/ReactJsIcon';
import SpringBootIcon from '../components/icons/SpringBootIcon';

const TECH_STACKS = [
    {
        icon: <ReactJsIcon />,
        label: 'React',
    },
    {
        icon: <DjangoIcon />,
        label: 'Django',
    },
    {
        icon: <SpringBootIcon />,
        label: 'Spring Boot',
    },
    {
        icon: <ExpressIcon />,
        label: 'Express',
    },
];

const IndexPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <Hero />
            <div className="flex flex-wrap items-center justify-center gap-2">
                {TECH_STACKS.map((techStack) => (
                    <TechStack key={techStack.label} {...techStack} />
                ))}
            </div>
        </PageLayout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <PageHead title="Home Page" />;
