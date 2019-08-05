import Header from '../components/Header';
import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
    flex: 1;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`

const Layout = ({ children }) => {
	return (
		<Wrapper>
			{children}
			<Header/>
		</Wrapper>
	)
}

export default Layout
