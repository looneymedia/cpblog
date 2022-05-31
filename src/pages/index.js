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
        height={200}
        width={200}
      />

    </Layout>
  )
}

export default IndexPage

// Link about installing gatsby-plugin-mdx and dependencies - as well as popular remark plugins. Search "gatsby-remark-"
// https://www.gatsbyjs.com/docs/tutorial/part-5/#task-install-and-configure-the-mdx-transformer-plugin-and-dependencies