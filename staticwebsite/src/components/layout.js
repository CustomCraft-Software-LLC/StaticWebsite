import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div className="layout-container">
        <main>{children}</main>
        <footer className="layout-footer">
          <p>© {new Date().getFullYear()} &middot; Built with {` `}
            <a href="https://www.customcraftsoftware.com" target="_blank" rel="noopener noreferrer">
              CustomCraft Software, LLC
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
