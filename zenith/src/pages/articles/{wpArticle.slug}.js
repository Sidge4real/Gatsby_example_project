import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import LatestNews from "../../components/latestNews"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

const ArticlePage = ({
  data: {
    wpArticle: { articleMeta },
  },
}) => {
  const image = getImage(articleMeta.picture)
  return (
    <Layout className="grid">
      <Seo title={`Zenith | ${articleMeta.title}`} />
      <section className="grid-section">
        <section className="article-template">
          {/* Voeg hier de correcte image component toe. */}
          <GatsbyImage alt={articleMeta.picture.altText} image={image} />
          <div className="article-template-topics">
            {/* Loop over de topics en return een span element met daarin de name
            property. */}
          </div>
          <h1>{articleMeta.title}</h1>
          <p className="article-template-author">
            Written by {articleMeta.author}
          </p>
          <article
            className="article-template-body"
            dangerouslySetInnerHTML={{ __html: articleMeta.body }}
          />
        </section>
      </section>
      <aside className="grid-aside">
        <LatestNews />
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    wpArticle(slug: { eq: $slug }) {
      articleMeta {
        title
        picture {
          altText
          gatsbyImage(placeholder: BLURRED, width: 1000, height: 500)
          slug
        }
        author
        body
      }
      topics {
        nodes {
          name
        }
      }
      link
    }
  }
`

export default ArticlePage
