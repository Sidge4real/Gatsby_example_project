import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ArticleTemplate = () => {
  return (
    <Layout className="grid">
      <Seo title={`Zenith | ${articleMeta.title}`} />
      {/* <section className="grid-section">
        <section className="article-template">
          Voeg hier de correcte image component toe.
          <div className="article-template-topics">
            Loop over de topics en return een span element met daarin de name property.
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
      </aside> */}
    </Layout>
  )
}