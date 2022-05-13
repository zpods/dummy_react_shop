import React, { useState } from 'react'
import { Form, Row, Container, Button, Col, Card, InputGroup } from 'react-bootstrap'  
import { useSelector, useDispatch  } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../storeSlice/loginRegisterLogout/loginRegisterLogout';
import { useNavigate } from 'react-router';


export default function LoginForm() {

    const { isAuth, error } = useSelector(state => state.loginRegisterLogout);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    React.useEffect(()=>{
        if(isAuth){
            navigate('/shop');
        }
    },[isAuth, navigate])


    return (
        <Formik
            onSubmit={(values) => {

            let bodyFormData = new FormData();
            bodyFormData.append('email', values.email);
            bodyFormData.append('password', values.password);

            dispatch(loginUser(bodyFormData));
            }}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
          }) => (
            <Container className='mt-5'>            
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="email"                    
                                placeholder="Email"
                                isInvalid={!!errors.email}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            {errors.email}
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>        
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="12" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                name="password"                    
                                placeholder="Password"
                                isInvalid={!!errors.password}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            {errors.password}
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group> 
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="12">
                            <Button className='w-100' type="submit">Submit</Button>
                        </Form.Group>                       
                    </Row>                         
                </Form>        
                { error 
                && 
                <Card className="mt-4 ">
                    <Card.Body>
                        <Card.Text className="d-flex justify-content-center text-danger">Error Try Again In A While</Card.Text>
                    </Card.Body>
                </Card>
                }
            </Container>       
            )}
    </Formik>
  );
}