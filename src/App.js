import './App.css';
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
