import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

const HeaderArticle = ({
  article: {
    slug,
    articleMeta: { title, author, picture },
  },
}) => {
  const image = getImage(picture.localFile);
  return (
    <article className="article">
      {/*Voeg hier de correcte image component toe. */}
      <GatsbyImage alt={picture.altText} image={image} /> 
      <h2>{title}</h2>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default HeaderArticle
