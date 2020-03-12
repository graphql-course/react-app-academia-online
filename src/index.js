import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const httpLink = {
    uri: 'https://academia-online.herokuapp.com/graphql'
};
  
const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});
  
  
const Root = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
