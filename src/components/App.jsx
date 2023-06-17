import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRoute } from './RestrictedRout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register/>} />} />
        <Route path="/login" element={ <RestrictedRoute redirectTo="/contacts" component={<Login/>} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>} />} />
      </Route>
    </Routes>
  );
};
