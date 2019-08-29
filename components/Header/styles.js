import styled from 'styled-components';

const Header_SC = styled.header`
  background-color: #fff;
  color: #0b0c0c;

  a {
    color: #0b0c0c;
  }
`;

const HeaderComponent_SC = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Header_SC, HeaderComponent_SC };
