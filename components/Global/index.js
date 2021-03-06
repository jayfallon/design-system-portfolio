import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset';
import Theme from '../Theme';

const GlobalStyle = createGlobalStyle`
${reset}
@import url("https://use.typekit.net/wrv5hzu.css");
:root {
  font-size: 10px;
}
body {
  background-color: ${Theme.pageBgColor};
  padding-bottom: 36rem;
  height: 100%;
  color: ${Theme.pageTextColor};
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
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

h1 {
  color: #fff;
  font-family: cheap-pine-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4rem;
  
}
`;

export default GlobalStyle;
