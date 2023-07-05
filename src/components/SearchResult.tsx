import { Link } from 'gatsby';
import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-hooks-web';

const SearchResult = ({ hit }: any) => {
    return (
        <Link to={`/${hit.type}/${hit.slug}`}>
            <div className="my-2 rounded-md bg-slate-50 p-2 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-600">
                <span className="text-xs capitalize text-slate-400">
                    {hit.type}
                </span>
                <h4 className="text-md font-bold text-sky-900 dark:text-sky-500">
                    <Highlight attribute="title" hit={hit} />
                </h4>
                <p className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                    <Snippet attribute="excerpt" hit={hit} />
                </p>
            </div>
        </Link>
    );
};

export default SearchResult;
