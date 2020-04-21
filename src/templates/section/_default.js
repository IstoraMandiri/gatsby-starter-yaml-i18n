import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'
import LocalizedMenu from '../../components/localizedMenu'

export default ({ data: { collections }, pageContext, pageContext: { relativePath, linkPrefix, i18n } }) => (
  <Layout pageContext={pageContext} color="green">
    <h2>Sub Section</h2>
    <LocalizedMenu items={i18n.globals.sectionMenu} linkPrefix={linkPrefix} />
    {relativePath.startsWith('section/welcome') && <Link to={`${linkPrefix}/section/welcome/nested`}>Nested Item</Link>}
    <hr/>
    Everything in this section has additional routes!
  </Layout>
)

export const query = graphql`
  query ($locale: String!, $relativePath: String!) {
    collections: allI18NCollection(
      filter: {
        locale: { eq: $locale }
        directory: { eq: $relativePath }
      }
    ) {
      edges {
        node {
          name
          content {
            name
          }
        }
      }
    }
  }

`
