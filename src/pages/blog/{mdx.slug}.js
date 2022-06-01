import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image"; //removed getImage from import - seel below.

const BlogPost = ({ data }) => {

    const { body, timeToRead } = data.mdx;
    const { 
        title, 
        author, 
        datePublished, 
        hero_image, 
        hero_image_alt, 
        hero_image_credit_link, 
        hero_image_credit_text 
    } = data.mdx.frontmatter;

    //getImage helper function doesn't seem to work. 
    //The docs say it returns childImageSharp.gatsbyImageData
    //However, GraphiQL is returning childrenImageSharp, not child.
    //So I'm accessing the first and only item in the childrenImageSharp array to get gatsbyImageData.

    // const image = getImage(data.mdx.frontmatter.hero_image);
    const image = hero_image.childrenImageSharp[0].gatsbyImageData;

    return ( 
        <Layout pageTitle={title}>
            <p>{author}</p>
            <p>{datePublished}</p>
            <p>{`${timeToRead} minute read`}</p>
            <GatsbyImage image={image} alt={hero_image_alt} />
            <p>Photo by: <a href={hero_image_credit_link}>{hero_image_credit_text}</a></p>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
     );
}

export const query = graphql`
    query ($id: String = "") {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                author
                datePublished(formatString: "MMMM D, YYYY")
                hero_image {
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
            }
            body
            timeToRead
        }
    }
`
 
export default BlogPost;