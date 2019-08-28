import Link from 'next/link';

const HeaderNav = props => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a title="Link to home page">Home</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default HeaderNav;
