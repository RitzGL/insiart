import "./App.css";
import LandingPage from "./Pages/LandingPage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import UnauthorisedPage from "./Pages/UnathorisedPage";
import ArtistSearchPage from "./Pages/SearchSuggestionPages/ArtistSearchPage";
import PieceNameSearchPage from "./Pages/SearchSuggestionPages/PieceNameSearch";
import SuggestionsPage from "./Pages/SearchSuggestionPages/SuggestionsPage";
import TimePeriodSearchPage from "./Pages/SearchSuggestionPages/TimePeriodSearch";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/unauthorised">
          <UnauthorisedPage />
        </Route>
        <Route exact path="/homepage/search-artist">
          <ArtistSearchPage />
        </Route>
        <Route exact path="/homepage/search-pieces">
          <PieceNameSearchPage />
        </Route>
        <Route exact path="/homepage/search-time-periods">
          <TimePeriodSearchPage />
        </Route>
        <Route exact path="/homepage/suggestions">
          <SuggestionsPage />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
