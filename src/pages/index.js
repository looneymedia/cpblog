import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>This is a Home Page. I'm learning how Gatsby works.</p>
      <p>It's pretty cool so far.</p>
      <StaticImage
        alt="Nick wearing a black, sleeveless shirt."
        src="../images/profile-pic-nick.png"
      />
    </Layout>
  )
}

export default IndexPage