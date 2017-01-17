var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var App = require('../components/App');
var SecondForm = require('../components/SecondForm');
var Main = require('../components/Main');
var ThirdForm = require('../components/ThirdForm');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
    <IndexRoute component={App} />
      <Route path='step-two' header='Hoja de vida' component={SecondForm} />
      <Route path='step-three' header='Hoja de vida' component={ThirdForm} />
    </Route>
  </Router>
);

module.exports = routes;

/*The routes file in config will contain every path that our app will take during
It's executions, this path will be called route and will be stored in a variable
called routes, routes will have "Router" and "Route" the last one will require
some properties like path (Basically the url that you want that route to be asociated
with) and the component that will be active when the route is executing. You will
also need to specified where the container is by creating a var with its name and
seting it to the file that contains that containers code.
*/

/*Container components allow us to have some sort of logic (?)*/
