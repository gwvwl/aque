import { NavLink } from "react-router-dom"
import {useAuth} from '../../useHook/use-auth';
import './404.css';

const NotFound = () => {
    const {isAuth} = useAuth();
    return isAuth ? (
        <div className="not__found">
            <NavLink to='/menu/dashboard'>
                Page not found, go Home.
            </NavLink>
        </div>
    ) : <div className="not__found">
            <NavLink to='/'>
                Page not found, go Home.
            </NavLink>
        </div>
}
export default NotFound;