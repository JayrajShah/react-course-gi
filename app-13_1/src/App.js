import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
// import NewQuote from "./components/pages/NewQuote";
// import PageNotFound from "./components/pages/PageNotFound";
// import QuoteDetail from "./components/pages/QuoteDetail";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./components/pages/NewQuote.js"));
// const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes.js"));
const PageNotFound = React.lazy(() =>
  import("./components/pages/PageNotFound.js")
);
const QuoteDetail = React.lazy(() =>
  import("./components/pages/QuoteDetail.js")
);

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
