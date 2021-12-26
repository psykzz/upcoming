import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import Layout from "../components/Layout"

import * as styles from "./upcoming.module.css"

const Upcoming = ({ link, title, cover, releaseDate }) => {
  const gotoLink = () => {
    return event => {
      event.preventDefault()
      window.location.href = link
    }
  }

  return (
    <div className={styles.item} onClick={gotoLink(link)}>
      <img src={cover} alt={title} />
      <div className={styles.detail}>
        <h3>{title}</h3>
        <span>{moment(releaseDate).fromNow()}</span>
      </div>
    </div>
  )
}

export default function Page() {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query UpcomingList {
      allMarkdownRemark {
        nodes {
          data: frontmatter {
            slug
            title
            cover
            releaseDate
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Upcoming Games</h1>
        <subtle>Ordered by time to release...</subtle>

        {nodes.map(({ data }) => (
          <Upcoming {...data} />
        ))}
      </div>
    </Layout>
  )
}
