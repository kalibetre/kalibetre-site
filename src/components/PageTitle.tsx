import React from 'react';

type PageTitleProps = {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
    const { title, subtitle, children } = props;
    return (
        <div className="mb-12 mt-6 flex flex-col justify-center sm:mb-12 sm:items-center">
            <h2 className="text-4xl">{title}</h2>
            <h3 className="text-md text-slate-400">{subtitle}</h3>
            {children}
        </div>
    );
};

export default PageTitle;
