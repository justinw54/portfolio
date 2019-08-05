import Layout from '../components/Layout';
import Thumbs from '../sections/home/thumbs';
import Landing from '../sections/home/landing';
import Bio from '../sections/home/bio';

export default function Index() {
    return (
       <Layout>
           <Landing/>
           <Thumbs/>
           <Bio/>
       </Layout>
    );
}
