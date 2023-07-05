const ALGOLIA_INDEX_NAME = `Pages`;

const PAGE_QUERY = `{
  pages: allMdx (
    filter: { 
      frontmatter : { 
        published: { eq: true } 
      }
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          type
          title
        }
        fields {
					slug
        }
        internal {
          contentDigest
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

type PageQueryResult = {
    node: {
        id: string;
        frontmatter: {
            type: string;
            title: string;
        };
        fields: {
            slug: string;
        };
        internal: {
            contentDigest: string;
        };
        excerpt: string;
    };
};

function pageToAlgoliaRecord({
    node: { id, frontmatter, fields, ...rest },
}: PageQueryResult) {
    return {
        objectID: id,
        ...frontmatter,
        ...fields,
        ...rest,
    };
}

const queries = [
    {
        query: PAGE_QUERY,
        transformer: ({ data }: any) =>
            data.pages.edges.map(pageToAlgoliaRecord),
        indexName: ALGOLIA_INDEX_NAME,
        settings: { attributesToSnippet: [`excerpt:20`] },
    },
];

module.exports = queries;
