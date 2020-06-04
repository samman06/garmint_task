import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import businesses from "./components/businesses/Businesses";
import BusinessesData from "./components/businesses/moreInfo";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Route path='/' exact component={businesses}/>
                        <Route path='/:id' exact component={BusinessesData}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
