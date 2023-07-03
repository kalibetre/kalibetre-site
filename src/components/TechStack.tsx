import React from 'react';

type TechStackProps = {
    icon: React.ReactNode;
    label: string;
};

const TechStack: React.FC<TechStackProps> = (props) => {
    const { icon, label } = props;
    return (
        <div className="flex items-center justify-start rounded-md p-2">
            <span className="h-4 w-5 rounded-full">{icon}</span>
            <span className="ml-1 text-xs text-slate-600 dark:text-slate-400">
                {label}
            </span>
        </div>
    );
};

export default TechStack;
