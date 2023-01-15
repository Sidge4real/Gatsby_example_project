import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="header">
    <Link className="header-logo" to="/">
    <StaticImage src="../images/zenith-logo.png" width="150" height="150" />
    </Link>
    <nav className="header-nav">
      <ul>
        <li>
          <Link activeClassName="active" to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
