import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import img from '../images/connectBcg.jpeg';
import Img from 'gatsby-image';
import styled from 'styled-components';

//can add grayscale: true if you want black and white photo.
//fluid fits the container.
const getImages = graphql`
{
    fixed:file(relativePath:{eq: "defaultBcg.jpeg"}){
      childImageSharp{fixed(width:300, height:400){ 
        ...GatsbyImageSharpFixed
      }
      }
    }
    fluid:file(relativePath:{eq:"blogBcg.jpeg"}){
      childImageSharp{fluid{
           ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
const Images = () => {
   const data = useStaticQuery(getImages)
    return (
        <Wrapper>
            <article>
                <h3>basic image</h3>
                <img src={img} className="basic" />
            </article>
            
            <article>
                <h3>fixed image</h3>
                <Img fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article>
                <h3>fluid image</h3>
                <Img fluid={data.fluid.childImageSharp.fluid}  />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    text-align: center;
    text-tranform: capitalize;
    width: 100vw;
    margin: 0 auto 10rem auto;
    article{
        border: 1px solid red;
        padding: 1rem 0;
        width: 32%
    }
    .basic {
        width: 100%;
    }
`;


export default Images;