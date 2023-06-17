import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from './auth/selectors';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectVisibleContacts,
} from './contacts/selectors';

export const useVisibleContacts = () => {
  return useSelector(selectVisibleContacts);
};
export const useContacts = () => {
  return useSelector(selectContacts);
};
export const useFilter = () => {
  return useSelector(selectFilter);
};
export const useIsLoading = () => {
  return useSelector(selectIsLoading);
};
export const useError = () => {
  return useSelector(selectError);
};
export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};

