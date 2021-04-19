# gatsby-source-filesystem-markdown-slug

Based on the example documentation. Adds a new node field called 'slug' to gatsby-source-filesystem sourced data based on the filename.

This plug-in can be partnered up with `gatsby-source-filesystem-markdown-name`, a related plug-in which adds a new node field called "name" designed to filter on a directory referenced by gatsby-source-filesystem. 

## Install

```
npm i gatsby-source-filesystem-markdown-slug
```

or

```
yarn add gatsby-source-filesystem-markdown-slug
```

## Example gatsby-config.js

```javascript
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts/`,
        name: 'posts',
      },
    },
    'gatsby-source-filesystem-markdown-slug',
  ]
```

# Example GraphQL Query

```graphql
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug          
        }
      }
    }
  }
}
```