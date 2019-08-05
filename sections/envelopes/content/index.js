import * as S from './Content.styled'
import * as T from '../../../components/Typography'
import * as G from '../../../components/Grid'

const Content = () => (
    <S.ContentWrapper>
        <T.Body>
            The Envelope System is a popular budgeting technique 
            that helps prevent overspending. How it works is that 
            we would begin by finding a handful of old fashioned 
            brown envelopes and label them with the spending 
            categories that we want to keep an eye on like <T.BodyItalic>groceries</T.BodyItalic>, <T.BodyItalic>coffee</T.BodyItalic>, <T.BodyItalic>transit</T.BodyItalic>. Then we would withdraw 
            an amount of cash for each envelope: for example; 
            $80 for groceries, and place that money into the 
            envelope. We’d then go about our week, spending 
            from each envelope until that envelope is empty, 
            in which case we’d have a clear indicator that we’ve 
            overspent and it’s time to stop.
        </T.Body>
        <G.XLarge/>
    </S.ContentWrapper>
)

export default Content