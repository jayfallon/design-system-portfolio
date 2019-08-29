import Link from 'next/link';
import { HeaderLogo_SC } from './styles';

const HeaderLogo = props => (
  <HeaderLogo_SC>
    <Link href={props.linkUrl}>
      <a title={props.linkTitle}>
        <span>{props.children}</span>
      </a>
    </Link>
  </HeaderLogo_SC>
);

export { HeaderLogo };
