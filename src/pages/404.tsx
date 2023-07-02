import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>Page not found</h1>
        </main>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
