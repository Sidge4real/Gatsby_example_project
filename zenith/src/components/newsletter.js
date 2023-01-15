import React from "react"

const Newsletter = ({ newsletter: { title, information, subscribeLink } }) => {
  return (
    <article className="newsletter">
      <h3>{title}</h3>
      <p>{information}</p>
      <a href={subscribeLink.url}>{subscribeLink.title}</a>
    </article>
  )
}

export default Newsletter
