import "./App.css";
import LandingPage from "./Pages/LandingPage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import Homepage from "./components/Homepage";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <Homepage />
      </Route>
    </Router>
    </ApolloProvider>
  );
}

export default App;
