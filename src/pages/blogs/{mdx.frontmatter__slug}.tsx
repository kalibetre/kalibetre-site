import { HeadFC, PageProps, graphql } from 'gatsby';
import React from 'react';
import GatsbyImageWrapper from '../../components/GatsbyImageWrapper';
import PageHead from '../../components/PageHead';
import PageLayout from '../../components/PageLayout';

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
    data,
    children,
}) => {
    const { mdx } = data;

    return (
        <PageLayout>
            <article className="prose dark:prose-invert lg:prose-lg">
                <div>
                    <h1>{mdx?.frontmatter?.title}</h1>
                    <p className="text-slate-500">{mdx?.frontmatter?.desc}</p>
                    <div className="">
                        <GatsbyImageWrapper
                            image={mdx?.frontmatter?.image}
                            alt={mdx?.frontmatter?.title}
                        />
                    </div>
                </div>
                {children}
            </article>
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
        }
    }
`;

export const Head: HeadFC = () => <PageHead title="Blogs" />;

export default BlogPost;
