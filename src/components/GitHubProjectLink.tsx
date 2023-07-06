import React from "react";
import GitHubIcon from "./icons/GitHubIcon";

type GitHubProjectLinkProps = {
  url: string;
  label: string;
};

const GitHubProjectLink: React.FC<GitHubProjectLinkProps> = (props) => {
  const { url, label } = props;
  return (
    <div className="m-1 inline-block select-none rounded-md bg-slate-200 text-sm hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600">
      <div className="flex items-center justify-center gap-2 px-3 py-2">
        <span className="inline-block h-5 w-5">
          <GitHubIcon />
        </span>
        <a
          href={url}
          className="flex-1 appearance-none no-underline"
          target="_blank"
        >
          {label}
        </a>
      </div>
    </div>
  );
};

export default GitHubProjectLink;
