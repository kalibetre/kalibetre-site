import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import GatsbyImageWrapper from "../components/GatsbyImageWrapper";
import PageHead from "../components/PageHead";
import PageLayout from "../components/PageLayout";

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  const { mdx } = data;

  return (
    <PageLayout>
      <div className="w-full">
        <article className="prose mx-auto max-w-3xl dark:prose-invert sm:prose-lg">
          <div>
            <h1 className="mb-4 pb-0 text-4xl sm:text-5xl">
              {mdx?.frontmatter?.title}
            </h1>
            <time className="text-slate-500">{mdx?.frontmatter?.date}</time>
            <div className="mt-8">
              <GatsbyImageWrapper
                image={mdx?.frontmatter?.image}
                alt={mdx?.frontmatter?.title}
              />
            </div>
          </div>
          {children}
        </article>
      </div>
    </PageLayout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <PageHead title="Blogs" />;

export default BlogPost;
