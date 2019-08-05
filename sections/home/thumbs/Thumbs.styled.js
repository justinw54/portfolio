import styled from 'styled-components'


export const ThumbsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 1200px;
`

export const ThumbsTwoColumn = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const ImageLinkWrapper = styled.a`
    width: 49%;
    display: block;
    cursor: pointer;

    @media (max-width: 640px) {
        width: 100%;
        overflow: hidden;
      }

`

export const ImageWrapper = styled.img`
    width: 100%;
    height: auto;
    border-radius: 16px;
    &:hover {
        opacity: 0.65;
    }
`