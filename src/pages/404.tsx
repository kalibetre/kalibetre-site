import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import PageHead from '../components/PageHead';
import PageLayout from '../components/PageLayout';
import NotFoundIcon from '../components/icons/NotFoundIcon';

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <div className="flex h-48 w-full flex-col items-center justify-center">
                <span className="h-40 w-40">
                    <NotFoundIcon />
                </span>
                <h1 className="mt-8 text-lg text-slate-600 dark:text-slate-500">
                    Opps... the page your are looking for is not found
                </h1>
            </div>
        </PageLayout>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <PageHead title="Not found" />;
