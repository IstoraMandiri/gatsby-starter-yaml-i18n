import React from "react"
import { graphql } from "gatsby"

import { I18nLink as Link } from "gatsby-plugin-yaml-i18n"

import Layout from "../../components/layout"
import LocalizedMenu from "../../components/localizedMenu"
import Json from "../../components/json"

export default ({ data, pageContext, pageContext: { relativePath, i18n } }) => (
  <Layout pageContext={pageContext} color="green">
    <h2>Sub Section</h2>
    <LocalizedMenu items={i18n.globals.sectionMenu} />
    {relativePath.startsWith("section/welcome") && (
      <Link to="/section/welcome/nested">Nested Item</Link>
    )}
    <hr />
    <Json data={data} />
  </Layout>
)

export const query = graphql`
  query($mdxId: String, $locale: String!, $relativePath: String!) {
    markdown: allMdx(filter: { id: { eq: $mdxId } }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
        }
      }
    }
    collections: allYamlI18N(
      filter: {
        locale: { eq: $locale }
        relativeDirectory: { eq: $relativePath }
        type: { eq: "collection" }
      }
    ) {
      nodes {
        id
        relativeDirectory
        type
        data {
          tags
          name
        }
      }
    }
  }
`
