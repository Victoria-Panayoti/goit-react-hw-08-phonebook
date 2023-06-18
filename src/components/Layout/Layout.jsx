import { MyAppBar } from 'components/MyAppBar/MyAppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <MyAppBar />
      <Outlet />
      <GlobalStyle />
    </Container>
  );
};
