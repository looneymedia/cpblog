import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {

    const { title, author, datePublished } = data.mdx.frontmatter;
    const { body, timeToRead } = data.mdx;
    console.log(data);

    return ( 
        <Layout pageTitle={title}>
            <p>{author}</p>
            <p>{datePublished}</p>
            <p>{`${timeToRead} minute read`}</p>
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
            }
            body
            timeToRead
        }
    }
`
 
export default BlogPost;