import React from 'react';

type GroupTitleProps = {
    title: string;
};

const GroupTitle: React.FC<GroupTitleProps> = (props) => {
    const { title } = props;
    return (
        <div className="my-8 flex items-center justify-center">
            <span className="block h-[1px] w-full flex-1 bg-slate-100 dark:bg-slate-700" />
            <span className="px-6 text-xs text-slate-500">{title}</span>
            <span className="block h-[1px] w-full flex-1 bg-slate-100 dark:bg-slate-700" />
        </div>
    );
};

export default GroupTitle;
