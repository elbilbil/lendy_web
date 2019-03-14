import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';



import reducers from './reducers';
import App from './components/app'
import Welcome from './components/welcome';
import SignupChoice from "./components/auth/SignupChoice";
import Signin from "./components/auth/Signin";
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Feature from "./components/feature";
import DashboardPreteur from "./components/DashboardPreteur";
import UpdateProfile from "./components/UpdateProfile";
import Profile from "./components/Profile";


const store = createStore(reducers, {
    //On récupere le token qu'on a stocké en local storage s'il existe pour boot l'application avec en mode connecté
    auth: {authenticated: localStorage.getItem('token')}
}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup/:type" exact component={Signup} />
                <Route path="/signup" exact component={SignupChoice} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signout" exact component={Signout} />
                <Route path="/feature" exact component={Feature} />
                <Route path="/dashboard-preteur" exact component={DashboardPreteur} />
                <Route path="/update-profile" exact component={UpdateProfile} />
                <Route path="/profile" exact component={Profile} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);