import { NavLink } from "react-router-dom";
import { AuthNavBlock } from "./AuthNav.styled";
export const AuthNav = () => {
    return (
        <AuthNavBlock>
            <NavLink to='/register'>
                Register
            </NavLink>
            <NavLink to='/login'>
                Log in
            </NavLink>
        </AuthNavBlock>
    )
}