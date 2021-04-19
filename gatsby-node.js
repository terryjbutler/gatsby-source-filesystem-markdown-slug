/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions;

  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const value = createFilePath({ node, getNode });

  createNodeField({
    name: `slug`,
    node,
    value,
  });
};