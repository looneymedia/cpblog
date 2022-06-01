import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {

    const postsArray = data.allMdx.nodes;

    return ( 
        <Layout pageTitle="All the Posts">
            <ul>
                {postsArray.map(post => 
                    <article key={post.id}>
                        <Link to={post.slug}>
                            <h2>{post.frontmatter.title}</h2>
                        </Link>
                        <p>Posted: {post.frontmatter.datePublished}</p>
                        <p>Updated: {post.parent.modifiedTime}</p>
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
                slug
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