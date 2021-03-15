import "./App.css";
import GetTodos from "./components/todos/MyTodos";
import Login from "./views/Login";
import Register from "./views/Register";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/todos" component={GetTodos} />
      </Switch>
    </div>
  );
}

export default App;
