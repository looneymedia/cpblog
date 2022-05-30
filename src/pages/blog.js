import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {

    const postsArray = data.allFile.nodes;

    return ( 
        <Layout pageTitle="All the Posts">
            <ul>
                {postsArray.map(post => 
                    <li key={post.name}>{post.name}</li>
                )}
            </ul>
        </Layout>
     );
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }  
`
 
export default BlogPage;