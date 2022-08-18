import { Navigate } from "react-router";
import Login from "../components/Login/Login";
import Chat from "../components/Chat/Chat";
import Register from "../components/Register/Register";

const routes = [
    {
        path:'/',
        element:<Navigate to={'/login'}/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/chat',
        element:<Chat/>
    },
    {
        path:'/register',
        element:<Register/>
    }
]

export default routes