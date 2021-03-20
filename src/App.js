import "./App.css";
import GetTodos from "./components/todos/GetTodos";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import { Link, Route, Switch } from "react-router-dom";
import NotLoggedInDisclamer from "./views/NotLoggedInDisclaimer/NotLoggedInDisclaimer";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import NothingToSeeHere from "./components/nothingToSeeHere/NothingToSeeHere";
import Home from "./views/Home/Home";
import Signout from "./views/Signout/Signout";
import GdprAgreement from "./views/GdprAgreement/GdprAgreement";
import GdprModal from "./components/GdprModal/GdprModal";

function App() {
  //landingpage with todos
  // if not logged in -> you need to be logged in
  const localStorageToken = localStorage.getItem("token");
  // const NavBarContext = createContext(localStorageToken);
  // const { Provider, Consumer } = createContext(NavBarContext);
  const localStorageGdpr = localStorage.getItem("gdprAccepted");

  return (
    <div className="App">
      {/*       <NavigationBar localStorageToken={localStorageToken} /> */}
      <GdprModal />
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/" component={Login} exact /> */}
        <Route path="/login" component={Login} />
        <Route path="/gdpr" component={GdprAgreement} exact />
        <Route path="/register" component={Register} />
        <Route path="/signedout" component={Signout} exact />
        <Route path="/needlogin" component={NotLoggedInDisclamer} />
        {/* <Route path="/todos" component={GetTodos} /> */}
        {/* <Route path="/todos" component={GetTodos} /> */}
        <ProtectedRoutes exact path="/todos" component={GetTodos} />
        <Route component={NothingToSeeHere} />
      </Switch>
      <Link to="/gdpr">Privacy policy</Link>
    </div>
  );
}

export default App;
