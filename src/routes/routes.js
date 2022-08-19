import InputLogin from '../components/inputLogin/InputLogin';
import Register from "../components/register/Register"
import MainPage from "../components/mainPages/MainPage"

import {LOGIN_ROUTE, REGISTER_ROUTE, MENU_ROUTE} from './constRout';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <InputLogin/>
    },
    {
        path: REGISTER_ROUTE,
        element: <Register/>
    }
]

export const privateRoutes = [
    {
        path: MENU_ROUTE,
        element: <MainPage/>
    }
]