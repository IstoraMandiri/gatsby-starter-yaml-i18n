import React from 'react'
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Json from '../components/json'

export default ({ data: { links, collections }, pageContext: { i18n } }) => (
<>
  <h1>{i18n.globals.ui.title}</h1>
  <div>
    {links.edges.map(({ node: { path, context: { locale, i18n } } }) => <>
      <Link to={path}>{`${locale}: ${(i18n && i18n.title) || path}`}</Link>{` | `}
    </>)}
  </div>
  <Json data={{ i18n, collections }}/>
</>
)

export const query = graphql`
  query ($locale: String!, $relativePath: String!) {
    collections: allYamlI18NCollection(
      filter: { 
        locale: { eq: $locale } 
        path: { eq: $relativePath }
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
    links: allSitePage {
      edges {
        node {
          id
          context {
            locale
            i18n {
              title
            }
          }
          path
        }
      }
    }
  }

`;
