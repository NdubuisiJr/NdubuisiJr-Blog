import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import NavigationBar from './NavigationBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';

const App = () =>(
    <Router>
        <div>
            <NavigationBar /> 
        </div>
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/about' component={AboutPage} exact />
                <Route path='/blog' component={ArticleListPage} exact/>
                <Route path='/contact' component={ContactPage} exact/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default App;