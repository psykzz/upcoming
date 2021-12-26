import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { DarkmodeToggle } from "../DarkmodeToggle"
import { Footer } from "../Footer"
import "./common.css"

import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  const {
    allMarkdownRemark: {
      nodes: [{ data }],
    },
  } = useStaticQuery(graphql`
    query NextUpcomingGame {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___releaseDate }
        limit: 1
      ) {
        nodes {
          data: frontmatter {
            title
            cover
            link
            releaseDate
          }
        }
      }
    }
  `)

  console.log({ data })

  return (
    <>
      <Helmet>
        <title>
          Upcoming Titles | {data.title} - {data.releaseDate}
        </title>
        <meta
          name="description"
          content={`List of upcoming titles. ${data.title} is next on ${data.releaseDate}`}
        />
      </Helmet>
      <div className={styles.container}>{children}</div>
      <Footer />
      <DarkmodeToggle />
    </>
  )
}
export default Layout
