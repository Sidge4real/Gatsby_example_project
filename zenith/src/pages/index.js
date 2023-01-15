import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderArticle from "../components/headerArticle"
import LatestNews from "../components/latestNews"
import Newsletter from "../components/newsletter"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({
  data: {
    wpPage: {
      homePageFields: { headerArticle },
      newsletterFields,
    },
    allWpArticle,
    wpArticle: {topics}
  },
}) => {
  return (
    (
      <Layout>
        <Seo title="Home" />
        <HeaderArticle article={headerArticle} />
        {/* <LatestNews article={headerArticle} latestnews={allWpArticle} /> */}
        <LatestNews />
        <Newsletter newsletter={newsletterFields} />
      </Layout>
    )
  )
}
// page query (niet building component query)
export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homePageFields {
        headerArticle {
          ... on WpArticle {
            articleMeta {
              title
              author
              picture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
            id
            slug
          }
        }
      }
      newsletterFields {
        title
        information
        subscribeLink {
          url
          title
        }
      }
    }
    allWpArticle(sort: {fields: date}) {
    edges {
      node {
        articleMeta {
          author
          picture {
            altText
            gatsbyImage(placeholder: BLURRED, width: 300, height: 200)
          }
          title
        }
        date
      }
    }
  }
    wpArticle {
    articleMeta {
      title
      picture {
        altText
        gatsbyImage(placeholder: BLURRED, width: 200, height: 100)
        slug
      }
    }
    topics {
      nodes {
        name
      }
    }
  }
  }
`

export default IndexPage
