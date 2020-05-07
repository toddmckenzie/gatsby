import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';




function Background({ img, className, children, home}) {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            { children }
        </BackgroundImage>
    )
}

export default styled(Background)`
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    justify-content: center;
    align-items: center;
`

