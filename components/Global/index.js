import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset';
import Theme from '../Theme';

const GlobalStyle = createGlobalStyle`
${reset}
:root {
  font-size: 10px;
}
body {
  background-color: ${Theme.pageBgColor};
  padding-bottom: 36rem;
  height: 100%;
  color: ${Theme.pageTextColor};
  font-family: acumin-pro-condensed, sans-serif;
  font-weight: normal;
  font-size: 1.8rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  padding: 0 0;
}
#__next {
  height: 100%;
}
strong {
  font-weight: bold;
}
a.main__content--link {
  margin: 0 !important;
  padding: 1.5rem 2rem;
  width: 0.1rem;
  height: 0.1rem;
  color: ${Theme.mainContentLinkColor};
  font-size: 1.6rem;
  overflow: hidden;
  position: absolute;
  display: block;
  clip: rect(0 0 0 0);
}
a.main__content--link:focus {
  margin: inherit;
  background-color: ${Theme.mainContentLinkBgColor};
  width: auto;
  height: auto;
  white-space: inherit;
  outline: 3px solid ${Theme.mainContentLinkBgColor};
  outline-offset: 0;
  position: static;
  overflow: visible;
  clip: auto;
  clip-path: none;
  -webkit-clip-path: none;
}
`;

export default GlobalStyle;
