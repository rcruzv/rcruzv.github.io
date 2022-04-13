import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Imagem gerada aleatoriamente"
        src="https://picsum.photos/800/600"
      />
    </Layout>
  )
}

export default AboutPage