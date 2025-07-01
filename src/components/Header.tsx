import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px 0 16px 0;
  background: transparent;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  mix-blend-mode: darken;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-family: 'Golos Text', Arial, sans-serif;
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
`;

const Optom = styled.span`
  color: #473920;
`;

const Express = styled.span`
  color: #fff;
  background: #473920;
  border-radius: 8px;
  padding: 0 8px;
  margin-left: 8px;
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo src={logo} alt="Логотип" />
    <Title>
      <Optom>OPTOM</Optom> <Express>EXPRESS</Express>
    </Title>
  </HeaderWrapper>
); 