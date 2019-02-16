import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import GithubCorner from 'react-github-corner'
import Routes from './routes'
const App = () => <Routes />
export default () => {
  return (
    <Fragment>
      <nav>
        <Link to="/">Home</Link>
        <span>Examples</span>
        <Link to="contact" className="sublink">
          Contact Form
        </Link>
        <Link to="inputs" className="sublink">
          Text Inputs
        </Link>
        <Link to="attributes" className="sublink">
          Element Attributes
        </Link>
        <Link to="selectors" className="sublink">
          Selectors
        </Link>
        <Link to="others" className="sublink">
          Other Elements
        </Link>
        <Link to="styling" className="sublink">
          Styling
        </Link>
      </nav>
      <React.Suspense fallback={<div>Loading</div>}>
        <App />
      </React.Suspense>
      <GithubCorner
        href="https://www.github.com/Kevnz/react-form-elements"
        bannerColor="#151513"
        octoColor="#fff"
        size={80}
        direction="right"
      />
    </Fragment>
  )
}