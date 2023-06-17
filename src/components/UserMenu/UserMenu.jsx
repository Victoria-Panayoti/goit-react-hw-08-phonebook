import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import { useAuth } from "redux/hooks";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <>
            <p>Welcome,{user.name}</p>
            <button type="button" onClick={()=>dispatch(logOut())}>Log out</button>
        </>
    )
}