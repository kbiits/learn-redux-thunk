import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/components/Header';
import ProductDetail from './containers/components/products/ProductDetail';
import ProductListing from './containers/components/products/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/products/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
