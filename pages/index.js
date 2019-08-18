import Layout from '../components/Layout';
import Thumbs from '../sections/home/thumbs';
import Landing from '../sections/home/landing';
import Bio from '../sections/home/bio';
import styled from 'styled-components';

export const HomePage = styled.div`
    background-color: #000;
`

export default function Index() {
    return (
        <HomePage>
            <Layout>
                <Landing/>
                <Thumbs/>
                <Bio/>
            </Layout>
       </HomePage>
    );
}
