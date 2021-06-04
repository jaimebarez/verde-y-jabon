import React from "react"
import { graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LAST_IMAGE_NAME = "target_00013"

const IndexPage = ({ data }) => (
  <>
    {data.allFile.edges.map(edge => {
      const image = getImage(edge.node.childImageSharp)
      const name = edge.node.name
      const gatsby_image = <GatsbyImage image={image} />
      return name === LAST_IMAGE_NAME ? (
        <a
          href="https://www.instagram.com/verdeyjabon/"
          target="_blank"
          rel="noreferrer"
        >
          {gatsby_image}
        </a>
      ) : (
        gatsby_image
      )
    })}

    <br />
    <center>
      <a
        href="https://www.instagram.com/verdeyjabon/"
        target="_blank"
        rel="noreferrer"
      >
        @verdeyjabon
      </a>
      <br />
      <br />
      <a href="mailto:verdeyjabon@gmail.com" target="_blank" rel="noreferrer">
        verdeyjabon@gmail.com
      </a>
      <br />
      <br />
      <br />
    </center>

    <small>
      Hecho con{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>
    </small>
  </>
)

export default IndexPage

export const indexQuery = graphql`
  query AssetsPhotos {
    allFile(
      filter: { sourceInstanceName: { eq: "verdeyjabon_images" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
