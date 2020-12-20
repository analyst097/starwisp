import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, FormControl} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './compenents/Home';
import Posts from './compenents/Posts';
import Sidenav from './compenents/sidenav';

function App() {
  return (
    <BrowserRouter>
      <Sidenav />
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
}

export default App;
