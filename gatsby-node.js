
const { createFilePath } = require('gatsby-source-filesystem');

// GET all posts
async function getMdxForPosts({ actions, graphql }) {
  const { data } = await graphql(`
  query MyQuery {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          body
          id
        }
      }
    }
  }
  `);
  data.allMdx.edges.forEach((post) => {
    const { id } = post.node;
    const { slug } = post.node.fields;
    actions.createPage({
      path: `posts${slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id,
        pathPrefix: '/posts',
      },
    });
  });
}


exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    getMdxForPosts({ graphql, actions }),
  ]);
};

// Create additional fields for GraphQl query
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'collection',
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
