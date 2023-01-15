import React from "react"
import { Link } from "gatsby"

const Article = ({
  article: {
    slug,
    articleMeta: { title, author, picture },
  },
}) => {
  console.log(slug)
  return (
    <article className="article flex-item">
      {/*Voeg hier de correcte image component toe. */}
      <h3>{title}</h3>
      <p>Written by {author}</p>
      <Link className="link" to={`/articles/${slug}`}>
        Read more
      </Link>
    </article>
  )
}

export default Article
