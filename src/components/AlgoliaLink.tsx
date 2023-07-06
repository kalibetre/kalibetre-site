import React from "react";
import AlgoliaIcon from "./icons/AlgoliaIcon";

const AlgoliaLink = () => {
  return (
    <a
      className="flex gap-2 p-2"
      href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=localhost&amp;utm_campaign=poweredby"
      target="_blank"
      aria-label="Search by Algolia"
      rel="noopener noreferrer"
    >
      <span className="text-xs text-slate-400">Search by</span>
      <span>
        <AlgoliaIcon />
      </span>
    </a>
  );
};

export default AlgoliaLink;
