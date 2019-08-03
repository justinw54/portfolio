import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  color: '#3b00b3'
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/envelopes">
            <a style={linkStyle}>Envelopes</a>
        </Link>
    </div>
)

export default Header;