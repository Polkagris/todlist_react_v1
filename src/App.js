import "./App.css";
import React, { createContext } from "react";
import GetTodos from "./components/todos/GetTodos";
import Login from "./views/Login/Login";
import Register from "./views/Register";
import { Route, Switch } from "react-router-dom";
import NotLoggedInDisclamer from "./views/NotLoggedInDisclamer";
// import { MyTodos } from "./components/todos/MyTodos";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import NothingToSeeHere from "./components/nothingToSeeHere/NothingToSeeHere";
import Home from "./views/Home/Home";
import NavigationBar from "./components/navigation/NavigationBar";
import Signout from "./views/Signout/Signout";

function App() {
  //landingpage with todos
  // if not logged in -> you need to be logged in
  const localStorageToken = localStorage.getItem("token");
  // const NavBarContext = createContext(localStorageToken);
  // const { Provider, Consumer } = createContext(NavBarContext);

  return (
    <div className="App">
      {/*       <NavigationBar localStorageToken={localStorageToken} /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/" component={Login} exact /> */}
        <Route path="/login" component={Login} />
        <Route path="/signedout" component={Signout} exact />
        <Route path="/needlogin" component={NotLoggedInDisclamer} />
        {/* <Route path="/todos" component={GetTodos} /> */}
        {/* <Route path="/todos" component={GetTodos} /> */}
        <ProtectedRoutes exact path="/todos" component={GetTodos} />
        <Route component={NothingToSeeHere} />
      </Switch>
    </div>
  );
}

export default App;
