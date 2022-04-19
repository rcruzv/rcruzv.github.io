import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import './index.styl'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Colored wolf"
        src="../images/800x600.jpg"
      />
    </Layout>
  )
}

export default IndexPage