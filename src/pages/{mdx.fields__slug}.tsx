import { HeadProps, PageProps, graphql } from "gatsby";
import React from "react";
import GatsbyImageWrapper from "../components/GatsbyImageWrapper";
import PageHead from "../components/PageHead";
import PageLayout from "../components/PageLayout";
import { IGatsbyImageData, ImageDataLike, getSrc } from "gatsby-plugin-image";

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
            <h1 className="mb-4 pb-0 text-3xl sm:text-4xl">
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
        desc
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export const Head = (props: HeadProps<Queries.BlogPostQuery>) => {
  const { mdx } = props.data;
  // @ts-ignore
  const imgData: IGatsbyImageData = mdx?.frontmatter?.image;

  return (
    <PageHead
      title={mdx?.frontmatter?.title}
      image={getSrc(imgData)}
      description={mdx?.frontmatter?.desc}
      pathname={mdx?.fields?.slug}
    />
  );
};

export default BlogPost;
