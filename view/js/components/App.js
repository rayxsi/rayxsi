import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page404 from "./404";
import Eshop from "./eshop";
import Header from "./header";
import Home from "./home";
import SignUp from "./signup";
import Users from './users';

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