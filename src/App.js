import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/row" />
        </Route>
        <Route path="/:itemId?" exact component={Layout}></Route>
      </Switch>
    </div>
  );
}

export default App;

// our-domain.com/row - dndlayout
// our-domain.com/grid - GridLayout
