import styled from 'styled-components'
import * as T from '../../../components/Typography'

export const IntroWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ContentWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;
`

export const CenteredDisplay = styled(T.Display)`
    text-align: center;
`

export const CenteredSubHeading = styled(T.SubHeading)`
    text-align: center;
`