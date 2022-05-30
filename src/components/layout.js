import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }      
    `);

    const { title } = data.site.siteMetadata;

    return (
        <div className={container}>
        <title>{title}</title>
        <header className={siteTitle}>{title}</header>
        <nav>
            <ul className={navLinks}>
            <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
            <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
            <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
            </ul>
        </nav>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
        </div>
    )
}

export default Layout