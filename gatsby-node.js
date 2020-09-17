// GET all posts
async function getMdxForPosts({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
              tags
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
    const { slug } = post.node.frontmatter;
    actions.createPage({
      path: `posts/${slug}`,
      component: require.resolve('./src/templates/post-template.jsx'),
      context: {
        id,
        pathPrefix: '',
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([getMdxForPosts({ graphql, actions })]);
};

// Create additional fields for GraphQl query
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'collection',
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
