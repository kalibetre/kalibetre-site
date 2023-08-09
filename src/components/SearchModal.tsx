import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Hits, Index, useSearchBox } from "react-instantsearch-hooks-web";
import AlgoliaLink from "./AlgoliaLink";
import SearchResult from "./SearchResult";
import CloseIcon from "./icons/CloseIcon";
import SearchIcon from "./icons/SearchIcon";

type SearchModalProps = {
  handleClose?: () => void;
};

const SearchModal: React.FC<SearchModalProps> = (props) => {
  const { handleClose } = props;
  const { query, refine } = useSearchBox();
  const searchInput = useRef<HTMLInputElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;
    handleClose && handleClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose && handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    searchInput.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-slate-300/60 p-4 backdrop-blur-[4px] dark:bg-slate-900/60"
    >
      <div className="flex max-h-full w-full max-w-2xl flex-col rounded-md bg-white dark:bg-slate-700 dark:text-slate-200 sm:mx-auto sm:mt-20">
        <form>
          <div className="flex items-center border-b-[1px] border-slate-100 p-2 dark:border-slate-600 sm:p-3">
            <span className="h-8 w-8">
              <SearchIcon />
            </span>
            <input
              ref={searchInput}
              type="text"
              className="flex-1 appearance-none bg-transparent p-2 focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Search..."
              value={query}
              onChange={(e) => refine(e.target.value)}
            />
            <button
              onClick={handleClose}
              className="h-8 w-8 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
        </form>
        <div className="flex flex-1 overflow-auto">
          <div className="h-full w-full p-4">
            {query && query.length > 0 ? (
              <Index indexName="Pages">
                <Hits className="Hits" hitComponent={SearchResult} />
              </Index>
            ) : (
              <div className="my-8 flex h-full w-full items-center justify-center text-slate-500">
                <p>Start typing to search</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end border-t-[1px] border-slate-100 p-1 dark:border-slate-600">
          <AlgoliaLink />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default SearchModal;
