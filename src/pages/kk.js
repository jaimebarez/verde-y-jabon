import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(
      graphql`
        query {
            placeholderImage: file(relativePath: { eq: "target_00003.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )

  const imageData = data.placeholderImage.childImageSharp.fluid


  return (
<div>

        <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      
      className={className}
      fluid={imageData}
      preserveStackingContext
    >
      <div style={{minHeight: 1000, minWidth: 1}}>
        holaaaa
      </div>
    </BackgroundImage>
        <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        
      className={className}
      fluid={imageData}
        preserveStackingContext
      >
        <div style={{minHeight: 1000, minWidth: 1000}}>
          adioss
        </div>
      </BackgroundImage>
</div>
  )
}
export default BackgroundSection