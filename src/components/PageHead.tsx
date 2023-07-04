import React from 'react';

type PageHeadProps = {
    title: string | null;
};

const PageHead: React.FC<PageHeadProps> = (props: PageHeadProps) => {
    return (
        <>
            <html lang="en" />
            <title>{props.title}</title>
        </>
    );
};

export default PageHead;
