import * as S from './Intro.styled'
import * as T from '../../../components/Typography'
import * as G from '../../../components/Grid'
import ImageFull from '../../../components/ImageFull'

const Intro = () => (
    <S.IntroWrapper>
        <S.ContentWrapper>
                <S.CenteredSubHeading>Product design</S.CenteredSubHeading>
                <S.CenteredDisplay>Envelopes payments</S.CenteredDisplay>
        </S.ContentWrapper>
        <G.Large/>
        <ImageFull/>
        <G.Large/>
    </S.IntroWrapper>
    

)

export default Intro