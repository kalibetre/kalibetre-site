import React from 'react';
import SearchIcon from './icons/SearchIcon';

const SearchButton = () => {
    return (
        <button className="group flex w-44 items-center justify-start gap-2 rounded-md border-[0.5px] border-slate-300 p-1 pl-2 pr-3 hover:ring-1 dark:border-none dark:bg-slate-800 dark:ring-0 dark:hover:bg-slate-700 ">
            <span className="h-6 w-6">
                <SearchIcon />
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-500">
                Quick Search
            </span>
        </button>
    );
};

export default SearchButton;
