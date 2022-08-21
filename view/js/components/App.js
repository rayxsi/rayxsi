import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../assets/css/Counter.module.css';
import Eshop from "./eshop";
import Users from './users'
import {Routes, Route} from 'react-router-dom'
import Header from "./header";
import Home from "./home";
import Page404 from "./404";
import SignUp from "./signup";

function App(props) {

    return (
        <div>
            <Header/>
           <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/products'} element={<Eshop/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'/*'} element={<Page404/>}/>
           </Routes>
        </div>
    );
}

export default App;