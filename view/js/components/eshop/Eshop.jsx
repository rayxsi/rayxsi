import React from 'react';
import {getPreState} from "@oreodusk/pre-api-loader";
import {fetchProducts} from "../../container/eshop";
import {getSsrPreLoad} from "../../redux";
import './eshop.css'

getSsrPreLoad(() => {return getPreState(fetchProducts())})

function Eshop(props) {
    return (
        <div>
            <h1 className={'eshop_style'}>e shop</h1>
        </div>
    );
}

export default Eshop;