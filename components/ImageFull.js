import React from 'react' 
import styled from 'styled-components'

export const ImageWrapper = styled.a`
    width: 100%;
    height: auto;
    display: block;

    &:hover {
		opacity: 0.65;
	}
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 16px;
`


const ImageFull = () => {
    return (
        <ImageWrapper>
            <Image 
                src="../static/smartbldgs_display_centered@2x.png"
            />
        </ImageWrapper> 
    )
}

export default ImageFull 