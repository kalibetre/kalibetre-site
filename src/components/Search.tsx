import algoliasearch from "algoliasearch";
import React, { useMemo, useState } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import SearchModal from "./SearchModal";
import SearchIcon from "./icons/SearchIcon";

const Search = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID ?? "",
        process.env.GATSBY_ALGOLIA_SEARCH_KEY ?? ""
      ),
    []
  );

  const handleClick = () => {
    setShowSearchModal(true);
  };

  return (
    <InstantSearch searchClient={searchClient} indexName="Pages">
      <button
        onClick={handleClick}
        className="group flex w-44 items-center justify-start gap-2 rounded-md border-[0.5px] border-slate-300 p-1 pl-2 pr-3 hover:ring-1 focus:outline-none dark:border-none dark:bg-slate-800 dark:ring-0 dark:hover:bg-slate-700 "
      >
        <span className="h-6 w-6">
          <SearchIcon />
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-500">
          Quick Search
        </span>
      </button>
      {showSearchModal && (
        <SearchModal handleClose={() => setShowSearchModal(false)} />
      )}
    </InstantSearch>
  );
};

export default Search;
