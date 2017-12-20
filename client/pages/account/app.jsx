'use strict';
const Footer = require('./footer.jsx');
const Home = require('./home/index.jsx');
const Navbar = require('./navbar.jsx');
const NotFound = require('./not-found.jsx');
const React = require('react');
const ReactRouter = require('react-router-dom');
const Settings = require('./settings/index.jsx');
const Assess = require('./assessments/index.jsx');
const Pending = require('./pending/index.jsx');
const Results = require('./results/index.jsx');


const Route = ReactRouter.Route;
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;


const App = (
    <Router>
        <div>
            <Route component={Navbar} />
            <Switch>
                <Route path="/account" exact component={Home} />
                <Route path="/account/settings" exact component={Settings} />
                <Route path="/assessments" exact component={Assess} />
                <Route path="/pending" exact component={Pending} />
                <Route path="/results" exact component={Results} />

                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </Router>
);


module.exports = App;
