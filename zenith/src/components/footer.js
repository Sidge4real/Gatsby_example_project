import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Footer = ({ siteTitle }) => {
  return (
    <section className="footer">
      <div className="footer-logo">
        <Link to="/">
          <StaticImage src="../images/zenith-logo.png" width="150" height="150" />
        </Link>
      </div>
      <div className="footer-info">
        <p>{siteTitle}</p>
        <p>Codobi</p>
        <p>All rights reserved.</p>
        <p>11 Forrester Way, London E15 1GL, UK</p>
      </div>
    </section>
  )
}

export default Footer
