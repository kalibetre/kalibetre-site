import { Link } from "gatsby";
import React from "react";

type PageLinkProps = {
  to: string;
  children: React.ReactNode;
};

const PageLink: React.FC<PageLinkProps> = (props) => {
  const { to, children } = props;
  return (
    <div className="flex flex-col">
      <Link
        to={to}
        className="peer flex h-full w-full items-center justify-center capitalize hover:text-teal-600 dark:hover:text-teal-400 sm:text-base"
      >
        {children}
      </Link>
      <span className="block h-[2px] w-full scale-0 bg-teal-600 transition ease-in-out peer-hover:scale-100 dark:bg-teal-400" />
    </div>
  );
};

export default PageLink;
