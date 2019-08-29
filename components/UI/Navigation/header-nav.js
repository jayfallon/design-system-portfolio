import Link from 'next/link';
import HeaderNav_SC from './styles';

const HeaderLinks = [
  {
    linkTitle: 'Link to home page',
    linkText: 'Home',
    linkHref: '/',
  },
  {
    linkTitle: 'Link to about page',
    linkText: 'About',
    linkHref: '/about',
  },
  {
    linkTitle: 'Link to Resume page',
    linkText: 'Resume',
    linkHref: '/resume',
  },
  {
    linkTitle: 'Link to Work page',
    linkText: 'Work',
    linkHref: '/work',
  },
];

const HeaderNav = props => (
  <HeaderNav_SC>
    <ul>
      {HeaderLinks.map((elem, i) => (
        <li key={i}>
          <Link href={elem.linkHref}>
            <a title={elem.linkTitle}>{elem.linkText}</a>
          </Link>
        </li>
      ))}
    </ul>
  </HeaderNav_SC>
);

export default HeaderNav;
