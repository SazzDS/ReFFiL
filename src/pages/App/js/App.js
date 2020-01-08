import React from 'react';
import '../css/App.css';
import Navbar from '../../../globalComponents/Navbar/js/Navbar';
import Sidebar from '../../../globalComponents/Sidebar/js/Sidebar';
import Home from '../../Home/Home';
import About from '../../About/About';
import Documentation from '../../Documentation/Documentation';
import HTTPRequests from '../../HTTPRequests/HTTPRequests';
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
  // console.log(dir);
  return (
    <>
      <div >
        <Navbar />
      </div>
      <div className="row">
        <Sidebar />
        <div className="col-md-10" style={{marginTop: '58px'}}>
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/documentation/:slug" component={Documentation} />
            <Route exact path="/requests/:slug" component={HTTPRequests} />
            <Route exact path="/about/" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </div>
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
