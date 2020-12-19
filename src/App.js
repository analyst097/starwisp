import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, FormControl} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './compenents/Home';
import Posts from './compenents/Posts';
import Sidenav from './compenents/sidenav';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Sidenav />
      <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
      </Form>
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  </div>
  );
}

export default App;
