import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey What's up?</h1>
    <p>My name is Daniel Owens.</p>
    <p>I'm a Web Developer in San Francisco.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
