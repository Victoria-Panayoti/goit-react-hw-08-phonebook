import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  // const isLoading = useIsLoading();
  // const error = useError();
  return (
    <Container>
      <AppBar />
      <Outlet />
      <GlobalStyle />
    </Container>
  );
};
