import styled from 'styled-components'

export const DisplayXLarge = styled.h1`
    font-family: 'Gibson-SemiBold';
    font-size: 50px;
    line-height: 52px;  
    font-weight: 600; 
    color: #262320;
    margin: 0;
`
export const Display = styled.h2`
    font-family: 'Gibson-SemiBold';
    font-size: 36px;
    line-height: 42px;  
    font-weight: 600; 
    color: #262320;
    margin: 0;
`

export const Heading = styled.h3`
    font-family: 'Gibson-SemiBold';
    font-size: 24px;
    line-height: 30px;  
    font-weight: 600; 
    margin: 0;
`

export const SubHeading = styled.h4`
    font-family: 'Gibson-Regular';
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    opacity: .5;
    margin: 0;
`

export const BlockQuote = styled.h5`
    font-family: 'Gibson-Italic';
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
    margin: 0;
`

export const Body = styled.p`
    font-family: 'Gibson-Regular';
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    margin: 0;
`

export const BodyItalic = styled.span`
    font-family: 'Gibson-Italic';
    font-style: italic;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
`

export const Caption = styled.p`
    font-family: 'Gibson-Regular';
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin: 0;
`

export const TextLink = styled.a`
    text-decoration: none;
    color: #E0D199;
    cursor: pointer;
    &hover {
        text-decoration: underline;
    }
`