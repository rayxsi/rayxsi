import React from 'react';
import {getPreState} from "@oreodusk/pre-api-loader";
import {fetchProducts} from "../../container/eshop";
import {getSsrPreLoad} from "../../redux";
import {useSelector, useDispatch} from 'react-redux'
import './eshop.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

getSsrPreLoad(() => {return getPreState(fetchProducts())})

function Eshop(props) {
    const products = useSelector(state => state.eshop);
    return (
         <CardGroup className='card-group'>
            {
                products.data.map(product => (
                    <Card style={{ width: '250px' }}>
                        <Card.Img style={{width: '250px', height: '150px'}} variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="primary">${product.price}</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </CardGroup>
    );
}

export default Eshop;