import '../components/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={ProductListing}
          />
          <Route
            path="/product/:productId"
            exact
            component={ProductDetails}
          />
          <Route> 404 Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
