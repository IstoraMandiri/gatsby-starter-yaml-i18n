import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'

export default ({ data, pageContext, pageContext: { i18n, linkPrefix } }) => (
  <Layout pageContext={pageContext} color="purple">
    <h2>{i18n.title}</h2>
    <MDXRenderer>{data.blog.body}</MDXRenderer>
    <hr/>
    <Link to={`${linkPrefix}blog`}>Back</Link>
  </Layout>
)

export const query = graphql`
  query BlogQuery($mdxId: String!) {
    blog: mdx(id: {eq: $mdxId}) {
      body
    }
  }
`
