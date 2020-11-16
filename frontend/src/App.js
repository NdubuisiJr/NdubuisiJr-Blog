import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ArticleListPage from './pages/ArticleListPage';
import NavigationBar from './NavigationBar';
import NotFound from './components/NotFound';
import ArticlePage from './pages/ArticlePage';
import Footer from './components/Footer';

const App = () =>(
    <Router>
        <div>
            <NavigationBar /> 
        </div>
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/contact' component={ContactPage} exact />
                <Route path='/blog' component={ArticleListPage} exact/>
                <Route path='/articles/:title' component={ArticlePage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
        <div>
            <Footer/>
        </div>
    </Router>
);

export default App;