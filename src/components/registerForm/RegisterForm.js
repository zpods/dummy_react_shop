import React, { useState } from 'react'
import { Form, Row, Container, Button, Col, Card, InputGroup } from 'react-bootstrap'  
import { useSelector, useDispatch  } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { registerUser } from '../storeSlice/loginRegisterLogout/loginRegisterLogout';
import { useNavigate } from 'react-router';


export default function RegisterForm() {

    const { isAuth, error } = useSelector(state => state.loginRegisterLogout);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        username: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(),
        email: yup.string()
        .required()
        .email(),
        password: yup.string()
        .min(8, 'To Short!')
        .required('Password Is Required!'),
        passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
      });

    React.useEffect(()=>{
        if(isAuth){
            navigate('/shop');
        }
    },[isAuth, navigate])


    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => {
            let bodyFormData = new FormData();

            bodyFormData.append('name', values.username);
            bodyFormData.append('email', values.email);
            bodyFormData.append('password', values.password);
            bodyFormData.append('password_confirmation', values.passwordConfirmation);

            dispatch(registerUser(bodyFormData));
            }}
          initialValues={{
            username: '',
            email: '',
            password: '',
            passwordConfirmation:'',
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
                        <Form.Group as={Col} md="12" controlId="validationUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                name="username"                       
                                placeholder="Username"
                                isInvalid={!!errors.username}
                                onChange={handleChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.username}
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                    </Row>
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
                    <Row className='mb-3'>               
                        <Form.Group as={Col} md="12" controlId="formPassword2">
                            <Form.Label >Confirm Password</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                name="passwordConfirmation"                    
                                placeholder="Confirm Password"
                                isInvalid={!!errors.passwordConfirmation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                            {errors.passwordConfirmation}
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