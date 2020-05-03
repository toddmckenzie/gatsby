import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
const getAbout = graphql`
    query aboutImage{
        aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
        childImageSharp{
        fluid(maxWidth:600){
            ...GatsbyImageSharpFluid_tracedSVG
        }
        } 
    }
    }
`
 


const About = () => {
    const { aboutImage } = useStaticQuery(getAbout);
    return (
        <div>
            <Img fluid={aboutImage.childImageSharp.fluid} />
        </div>
    )
}

export default About;
 