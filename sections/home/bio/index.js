import * as S from './Bio.styled'
import * as G from '../../../components/Grid'
import * as T from '../../../components/Typography'
import Link from 'next/link'

const Bio = () => {
    return (
        <S.ContentWrapper>
        <T.SubHeading>
            Background
        </T.SubHeading>
        <G.Small/>
        <T.Body>
            I'm a product designer at ecobee, where my team designs 
            software for smart hardware. My role revolves around our 
            commercial offering, <T.TextLink href="https://www.ecobee.com/smartbuildings/" target="_blank">SmartBuildings</T.TextLink>, a SAAS product that 
            lets companies manage all of their thermostats through a 
            single interface. Hailing from a 7 year background in 
            corporate finance and data management, I transitioned into 
            design by way of <T.TextLink href="https://design.ampd.yorku.ca/" target="_blank">YSDN</T.TextLink> (2015-2018).
        </T.Body>
        <G.Small/>
        <T.Body>
            Lately, I think a lot about how to better design, test 
            and measure how well software can meet and exceed 
            customer needs.
        </T.Body>
    </S.ContentWrapper>
    )   
}

export default Bio