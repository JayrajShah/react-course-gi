import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/authContext";

function App() {
  const AuthCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        {AuthCtx.isLoggedIn && (
          <Route path="/" exact>
            <HomePage />
          </Route>
        )}
        <Route path="/auth">
          {!AuthCtx.isLoggedIn && <AuthPage />}
          {AuthCtx.isLoggedIn && <Redirect to="/" />}
        </Route>
        {AuthCtx.isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/auth" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
