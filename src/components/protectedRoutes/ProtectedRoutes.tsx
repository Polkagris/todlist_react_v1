import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }: any) => {
    console.log("PROTECTED %%%%%%%%%%%%%%%%%%");
    console.log("Status: ", localStorage.getItem("token") != null)
    return (
        <Route {...rest} render=
        {props => {
           //  return <Redirect to="/needlogin" />

            if(localStorage.getItem("token") != null) {
                return <Component />
            } else {
                return <Redirect to="/needlogin" />

                
            }
            // localStorage.getItem("token") != null ? <GetTodos /> : <Redirect to="/needlogin" />
        }} />
    )
}

interface todoType {
    id: String,
    title: String,
    completed: boolean,
    userId: String
}

interface component {
    GetTodos: todoType
}

export default ProtectedRoutes