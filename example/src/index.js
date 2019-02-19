import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import App from './app'
// import './base.css'
// import './shoelace.css'

Sentry.init({
  dsn: 'https://64922db147bd46cc8cf68e6090e7e2fe@sentry.io/1395983',
})

ReactDOM.render(<App />, document.getElementById('app'))
