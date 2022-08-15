import InputLogin from "../inputLogin/inputLogin"
import Register from "../register/register"
import MainPage from "../mainPages/mainPage"

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