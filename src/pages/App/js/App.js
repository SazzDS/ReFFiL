import React from 'react';
import '../css/App.css';
import Navbar from '../../../globalComponents/Navbar/js/Navbar';
import Home from '../../Home/Home';
import About from '../../About/About';
import Documentation from '../../Documentation/Documentation';
import ErrorPage from '../../ErrorPage/ErrorPage';
import {
  Switch,
  useRouteMatch,
  Route,
  useParams
} from "react-router-dom";
  // BrowserRouter as Router
// ,
//   Link

function App() {
  var dir = window.location.pathname;
  return (
    <>
    <Switch>
      <Navbar />
      <Route path="/:id" children={<Child />} />
    </Switch>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/documentation/:slug" component={Documentation} />
      <Route exact path="/about/" component={About} />
      <Route component={ErrorPage} />
    </Switch>
    </>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  // console.log(id);

  return id;
}

export default App;
