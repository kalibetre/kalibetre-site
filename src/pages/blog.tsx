import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import BlogItem from "../components/BlogItem";
import PageHead from "../components/PageHead";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

const Blogs: React.FC<PageProps<Queries.BlogsQuery>> = ({ data }) => {
  const { nodes } = data.allMdx;

  return (
    <PageLayout>
      <PageTitle
        title="Blogs"
        subtitle="My technical writings and articles about tech and programming"
      />
      <div className="relative flex">
        <div className="absolute left-[6px] mt-6 h-full w-6 border-l-[0.5px] border-slate-300 dark:border-slate-600"></div>
        <div className="ml-[24px] flex w-full flex-col justify-center gap-3">
          {nodes.map(
            (node: any) =>
              node.frontmatter && (
                <BlogItem
                  key={node.fields.slug}
                  {...node.frontmatter}
                  {...node.fields}
                />
              )
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blogs;

export const Head: HeadFC = () => <PageHead title="Blogs" />;

export const query = graphql`
  query Blogs {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          desc
        }
        fields {
          slug
        }
      }
    }
  }
`;
