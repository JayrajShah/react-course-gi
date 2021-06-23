import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";

import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";

import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const currentRoute = useRouteMatch();

  const httpData = useHttp(getSingleQuote, true);

  console.log(httpData);

  const { sendRequest, status, data: loadedQuote, error } = httpData;

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  console.log(params.quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">No quotes found</p>;
  }

  if (!loadedQuote) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={currentRoute.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${currentRoute.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
