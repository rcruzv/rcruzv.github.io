import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header />
      
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout