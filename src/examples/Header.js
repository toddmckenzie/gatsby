import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

//could also set to variable
// const getSiteData = graphql`
//     {
//         site{
//         siteMetadata{
//         title
//             description
//             author
//         }
//         }
//     }
// `
//then setup useStaticQuery(getSiteData)

const Header = () => {
    const data = useStaticQuery(graphql`
    {
        site{
          siteMetadata{
          title
            description
            author
        }
        }
      }
    `)
    return (
        <div>
            <h1>title: {data.site.siteMetadata.title}</h1>
            <h1>Author: {data.site.siteMetadata.author}</h1>
        </div>
    )
}

export default Header;