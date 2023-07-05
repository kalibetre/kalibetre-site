import { Link } from 'gatsby';
import React from 'react';

type BlogItemProps = {
    date: string;
    slug: string;
    title: string;
    desc: string;
};

const BlogItem: React.FC<BlogItemProps> = (props) => {
    const { date, slug, title, desc } = props;
    return (
        <Link to={slug} className="group relative">
            <article
                key={slug}
                className="group flex w-full flex-col justify-between rounded-md p-4 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
                <div className="mb-4">
                    <p className="mb-2 text-sm text-slate-500">{date}</p>
                    <h2 className="text-lg">{title}</h2>
                    <h3 className="text-md text-slate-500">{desc}</h3>
                </div>
            </article>
            <span className="absolute -left-[24px] top-6 h-[12px] w-[12px] rounded-full border-[1px] border-slate-300 bg-white ring-teal-500 group-hover:ring-2 dark:border-slate-600 dark:bg-slate-900" />
        </Link>
    );
};

export default BlogItem;
