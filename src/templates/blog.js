import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Json from '../components/json'

export default ({ data: { blog }, pageContext, pageContext: { linkPrefix } }) => (
  <Layout pageContext={pageContext} color="blue">
    <h2>Blog</h2>
    This is a fancier layout just for the landing page.
    {blog.nodes.map(node => (
      <>
        <Json data={node} />
        <Link to={`${linkPrefix}${node.fields.yamlI18nPath}`}>{node.childMdx.frontmatter.title}</Link>
      </>
    ))}
  </Layout>
)

export const query = graphql`
  query MyQuery($locale: String!) {
    blog:allFile(
      filter: {
        fields: {
          yamlI18nLocale: { eq: $locale } 
          yamlI18nPath: {glob: "blog/*"}
        }
      }
    ) {
      nodes {
        fields {
          yamlI18nLocale
          yamlI18nPath
        }
        childMdx {
          excerpt
          frontmatter {
            date
            author
            title
          }
        }
      }
    }
  }
`
