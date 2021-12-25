import React from "react"
import { Helmet } from "react-helmet"
import { DarkmodeToggle } from "../DarkmodeToggle"
import { Footer } from "../Footer"
import "./common.css"

import * as styles from "./layout.module.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Upcoming Titles</title>
      <meta name="description" content={"List of upcoming titles."} />
    </Helmet>
    <div className={styles.container}>
      {children}
    </div>
    <Footer />
    <DarkmodeToggle />
  </>
)
export default Layout;
