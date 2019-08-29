import { HeaderNav } from '../UI/Navigation';
import { HeaderLogo } from '../UI/Logo';
import { Header_SC, HeaderComponent_SC } from './styles';

const Header = props => (
  <Header_SC>
    <HeaderComponent />
  </Header_SC>
);

const HeaderComponent = props => (
  <HeaderComponent_SC>
    <HeaderLogo linkTitle="Link to home page" linkUrl="/">
      Jay Fallon
    </HeaderLogo>
    <HeaderNav />
  </HeaderComponent_SC>
);

export default Header;
