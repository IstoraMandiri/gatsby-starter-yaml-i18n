import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { I18nLink as Link } from "gatsby-plugin-yaml-i18n"

import Layout from "../../components/layout"

export default ({ data, pageContext, pageContext: { i18n } }) => (
  <Layout pageContext={pageContext} color="purple">
    <h2>{i18n.title}</h2>
    <MDXRenderer>{data.blog.body}</MDXRenderer>
    <hr />
    <Link to="blog">Back</Link>
  </Layout>
)

export const query = graphql`
  query BlogQuery($mdxId: String!) {
    blog: mdx(id: { eq: $mdxId }) {
      body
    }
  }
`
