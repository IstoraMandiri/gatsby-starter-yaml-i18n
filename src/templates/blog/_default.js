import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'
import { Link } from 'gatsby'

export default ({ pageContext, pageContext: { i18n, linkPrefix } }) => (
  <Layout pageContext={pageContext} color="purple">
    <h2>{i18n.title}</h2>
    <MDXRenderer>{i18n.mdx}</MDXRenderer>
    <hr/>
    <Link to={`${linkPrefix}blog`}>Back</Link>
  </Layout>
)
