import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Style from './Signup.module.css';
import axios from "axios";

function SignUp(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitData = async e => {
        e.preventDefault();

        let data = {firstname, lastname, email, password, confirmPassword};

       const response = await axios.post('http://localhost:5050/add_user', JSON.stringify(data));
        if(response.status === 200) {
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }

    return (
        <Form className={`${Style.form}`}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fist name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" value={firstname} onChange={e => setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" value={lastname} onChange={e => setLastname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitData}>
                Submit
            </Button>
        </Form>
    );
}

export default SignUp;