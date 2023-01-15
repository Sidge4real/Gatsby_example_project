import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

// Gebruik de useStaticQuery hook want dit is een building block component!

const LatestNews = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpArticle(sort: { fields: date }) {
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
            slug
          }
        }
      }
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
    }
  `)
      const edges = data.allWpArticle.edges;
  return (
    <section className="flex-container">
      <h1>Latest News</h1>
      {edges.map((articles, index) => {
        const article = articles.node.articleMeta
        const pic = getImage(article.picture.gatsbyImage)
        const slug = articles.node.slug
        while (index < 6) {
          return (
            <article className="flex-item">
              <GatsbyImage alt={article.picture.altText} image={pic} />
              <h2>{article.title}</h2>
              <p>Written by {article.author}</p>
              <Link className="link" to={`/articles/${slug}`}>
                Read more
              </Link>
            </article>
          )
        }
      })}
    </section>
  )
}

export default LatestNews
