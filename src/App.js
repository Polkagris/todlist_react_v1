import "./App.css";
import GetTodos from "./components/todos/GetTodos";
import Login from "./views/Login";
import Register from "./views/Register";
import { Route, Switch } from "react-router-dom";
import NotLoggedInDisclamer from "./views/NotLoggedInDisclamer";
// import { MyTodos } from "./components/todos/MyTodos";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import NothingToSeeHere from "./components/nothingToSeeHere/NothingToSeeHere";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/needlogin" component={NotLoggedInDisclamer} />
        <Route path="/todos" component={GetTodos} />
        {/* <Route path="/todos" component={GetTodos} /> */}
        <ProtectedRoutes exact path="/todosp" component={GetTodos} />
        <Route component={NothingToSeeHere} />
      </Switch>
    </div>
  );
}

export default App;
