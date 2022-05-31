import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {

    const postsArray = data.allMdx.nodes;

    return ( 
        <Layout pageTitle="All the Posts">
            <ul>
                {postsArray.map(post => 
                    <article key={post.id}>
                        <h2>{post.frontmatter.title}</h2>
                        <p>Posted: {post.frontmatter.datePublished}</p>
                        <p>Updated: {post.parent.modifiedTime}</p>
                        <MDXRenderer>{post.body}</MDXRenderer>
                    </article>
                )}
            </ul>
        </Layout>
     );
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
                frontmatter {
                    datePublished(formatString: "MMMM, D, YYYY")
                    title
                }
                id
                body
                parent {
                    ... on File {
                        id
                        name
                        modifiedTime(formatString: "MMMM, D, YYYY")
                    }
                }
            }
        }
    } 
`
 
export default BlogPage;