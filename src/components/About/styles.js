import styled from 'styled-components'
import media from "styled-media-query"


export const AboutContainer = styled.div`
    margin: auto;
    max-width: 70rem;
    padding: 2rem 5rem;

    ${media.lessThan("large")`
        padding: 2rem 0;
        max-width: 100%;
    `}
`
export const AboutTitle = styled.h1`
    color: var(--postColor);
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
`
export const AboutDescription = styled.p`
    color: var(--postColor);
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
`

export const AboutIconContainer = styled.span`
    padding: 1.4rem;
    svg{
        margin-top: 1.4rem;
        width: 60px;
        height: 60px;
        fill: #bbb;

        ${media.lessThan("large")`
            width: 50px;
            height: 50px;
        `}
    }
`
