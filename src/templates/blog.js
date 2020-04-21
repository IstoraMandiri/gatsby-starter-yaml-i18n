import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data: { blog }, pageContext, pageContext: { linkPrefix } }) => (
  <Layout pageContext={pageContext} color="blue">
    <h2>Blog</h2>
    This is a fancier layout just for the landing page.
    {blog.nodes.map(node => (
      <div key={node.id} style={{ margin: '10px 0' }}>
        <Link to={`${linkPrefix}${node.fields.i18n.directory}`}>{node.frontmatter.title}</Link>
        <br />
        {node.excerpt}
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query MyQuery($locale: String!) {
    blog: allMdx(filter: {fields: {i18n: {locale: {eq: $locale}, parentDirectory: {eq: "blog"}}}}) {
      nodes {
        fields {
          i18n {
            locale
            directory
            parentDirectory
          }
        }
        id
        excerpt
        frontmatter {
          date
          author
          title
        }
      }
    }
  }
`
