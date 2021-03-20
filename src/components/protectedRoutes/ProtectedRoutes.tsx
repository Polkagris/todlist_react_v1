import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }: any) => {

    return (
        <Route {...rest} render=
        {props => {
            if(localStorage.getItem("token") != null) {
                return <Component />
            } else {
                return <Redirect to="/needlogin" />
            }

        }} />
    )
}

interface todoType {
    id: String,
    title: String,
    userId: String
}

interface component {
    GetTodos: todoType
}

export default ProtectedRoutes