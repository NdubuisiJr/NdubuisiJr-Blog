import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import NavBar from './NavBar';

const App = () =>(
    <Router>
        <div>
            <NavBar /> 
        </div>
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/about' component={AboutPage} exact />
                <Route path='/blog' component={ArticlesPage} exact/>
            </Switch>
        </div>
    </Router>
);

export default App;