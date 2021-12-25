import React from "react"
import { graphql } from "gatsby"
import { Company } from "../components/Company"

export default function Template({ data }) {
  console.log({data})
  const { markdownRemark: pageData } = data
  return (
    <Company data={pageData} />
  )
}

export const pageQuery = graphql`
  query UpcomingBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        # link
        # releaseDate
      }
    }
  }
`
