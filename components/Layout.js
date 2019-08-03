import Header from '../components/Header';

const layoutStyle = {
    padding: 20,
    maxWidth: 960,
    margin: '0 auto'

};

const Layout = props => (
    <div style={layoutStyle}>
        
        {props.children}
        <Header />
        
    </div>
);

export default Layout;