import styled from 'styled-components';

const HeaderNav_SC = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin: 0 2rem;
    padding: 1rem;

    a {
      font-family: source-serif-pro, serif;
      font-size: 2rem;
      text-decoration: none;
    }
  }
`;

export default HeaderNav_SC;
