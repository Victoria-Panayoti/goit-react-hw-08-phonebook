import { useSelector } from "react-redux";
import { selectContacts, selectError, selectFilter, selectIsLoading, selectVisibleContacts } from "./selectors";

export const useVisibleContacts = () => {
    return useSelector(selectVisibleContacts)
};
export const useContacts = () => {
    return useSelector(selectContacts)
};
export const useFilter = () => {
    return useSelector(selectFilter)
};
export const useIsLoading = () => {
    return useSelector(selectIsLoading)
};
export const useError = () => {
    return useSelector(selectError)
};