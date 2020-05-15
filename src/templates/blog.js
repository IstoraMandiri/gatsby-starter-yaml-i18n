import React from "react"
import { graphql } from "gatsby"

import { I18nLink as Link } from "gatsby-plugin-yaml-i18n"

import Layout from "../components/layout"

export default ({ data: { blogs }, pageContext }) => (
  <Layout pageContext={pageContext} color="blue">
    <h2>Blog</h2>
    This is a fancier layout just for the landing page.
    {blogs.nodes.map(node => (
      <div key={node.id} style={{ margin: "10px 0" }}>
        <Link to={`/${node.relativeDirectory}`}>{node.data.title}</Link>
        <br />
        {node.parent.excerpt}
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query($locale: String!) {
    blogs: allYamlI18N(
      filter: { locale: { eq: $locale }, parentDirectory: { in: ["blog"] } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        relativeDirectory
        type
        data {
          title
          author
          date
        }
        parent {
          ... on Mdx {
            excerpt(pruneLength: 180)
          }
        }
      }
    }
  }
`
