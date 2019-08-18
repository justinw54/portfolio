import * as S from './Thumbs.styled'
import * as G from '../../../components/Grid'
import ImageFull from '../../../components/ImageFull'
import Link from 'next/link';

const Thumbs = () => {
    return (
        <S.ThumbsWrapper>
            <ImageFull/>
            <G.Small/>
            <S.ThumbsTwoColumn>
                <S.ImageLinkWrapper>
                    <S.ImageWrapper src="../static/MDC_white_thumb_logo_only@2x.png"/>
                </S.ImageLinkWrapper>

                <Link href="/envelopes">
                    <S.ImageLinkWrapper>
                        <S.ImageWrapper src="../static/_envelopes-thumb-mobile-multiple@2x.png"/>
                    </S.ImageLinkWrapper>
                </Link>                
            </S.ThumbsTwoColumn>
        </S.ThumbsWrapper>
    )
}

export default Thumbs