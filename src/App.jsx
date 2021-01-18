import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import ROUTES from "configs/routes";
import HomePage from "pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROOT} exact>
          <Redirect to={ROUTES.HOMEPAGE} />
        </Route>
        <Route path={ROUTES.HOMEPAGE} exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
