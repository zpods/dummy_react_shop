import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCreditCardAlt, faFaceKissBeam, faGaugeSimpleHigh, faRandom, faAnchorCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Card, Container, Col, Row } from 'react-bootstrap';
import './AboutPage.css';



function AboutPage () {
    return (
        <main className='bg-danger py-5'>       
            <Container >
                <Card className='my-5'>
                    <Card.Body className='bg-danger text-white'>
                        <div className='px-3'>
                            <h2>About me</h2>
                        </div>
                        <div className='p-3'>
                            <Row>
                                <Col md={8}>
                                    <h4>My name is Zbigniew and I am a fullstack developer.</h4>
                                    <p className='textTitle'>My skills are:</p>
                                    <ul className='projectText'>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JAVASCRIPT</li>
                                        <li>REACT</li>
                                        <li>PHP</li>
                                        <li>LARAVEL</li>
                                        <li>SQL</li>
                                    </ul>
                                </Col>
                                <Col md={4}>
                                    img
                                </Col>    
                            </Row>
                            
                        </div>
                </Card.Body>
                </Card>
                
                <Card className='my-5'>
                    <div className='bg-danger'>
                    <div className='px-4 text-white'>
                        <h2>Projects</h2>
                    </div>
                    <div>
                        <Row>
                            <Col md={4} className="px-5 text-white">
                                <img src="./assets/images/img-02.jpg" className="img-responsive" alt=""/>
                                <h3 className="h5">Amelia App</h3>
                                <p>June 2017</p>  
                            </Col>
                            <Col md={4} className="px-5 text-white">
                                <img src="./assets/images/img-02.jpg" className="img-responsive" alt=""/>
                                <h3 className="h5">Amelia App</h3>
                                <p>June 2017</p>
                            </Col>
                            <Col md={4} className="px-5 text-white">
                                <img src="./assets/images/img-02.jpg" className="img-responsive" alt=""/>
                                <h3 className="h5">Amelia App</h3>
                                <p>June 2017</p>
                            </Col>
                        </Row>

                    </div>
                    </div>
                </Card>
                
                <Card className='my-5'>
                    <div className='bg-danger'>
                        <div className='p-4 text-white'>
                            <h3>Project: React with Laravel</h3>
                        </div>
                        <div className='text-white'>
                            <Row>
                                <Col>
                                    <p className='textTitle'>This project consists of two parts, one is built using React library and also other helpful frontend javascript libraries for building modern reactive apps. The second part is created with Laravel framework and Mysql database serving for backend purposes</p>
                                    <h4 className='textTitle'>Frameworks and libraries used for this project:</h4>
                                    <p className='projectText'>Frontend: React 17.0.2, axios, bootstrap, classnames, formik, redux, redux-thunk, react-redux, react-router, react-router-dom, react-bootstrap, node-sass, cra-sass.</p>
                                    <p>Backend: Laravel 9.20.0, Sanctum.</p>                                                                                             
                                </Col>
                                
                            </Row>
                            
                        </div>
                    </div>
                </Card>
                <Card className='my-5'>
                    <div className='bg-danger'>
                        <div className='p-4 text-white'>
                            <h3 >Short Description about this project (what is done).</h3>
                        </div>
                        <div className='text-white'>
                            <Row>
                                <Col>
                                    <h4 className='textTitle'>React part of an app has the followings features:</h4>

                                    <p className='projectText'>The application follows the REST API principle. It means is connected with the backend using REST API.</p>
                                    <p>At the top of the page is located a navigation bar with four links to choose from: Home, About, Shop, Login, and Register. On the right side of the page after mentioned links, you can find search input and a cart icon showing the number of products set in the cart. If you type product name in search input, it shows all descriptions and of all images belonging to the particular item.</p>
                                    <p>The home page was built using the bootstrap example template, all features (e.g carousel, grid) were created using a react-bootstrap library with bootstrap 5 capabilities.</p>

                                    <p> About Page contains the description of the page.</p>
                                    <p>The shop page contains a shop with a jumbotron at the top of the site and products displayed below the jumbotron. All items are organized using custom pagination with 12 items on one page.</p>
                                    <p> Every product has an image with a price visible on it and hidden on hover also a title on the right side of the image and below it, a short description, when the description is too long content is fitted using a custom scroll.</p>
                                    <p> Below these elements "Add To Cart" button and "In Stock" value is found.</p>
                                    <p> The button enables adding products to the cart, the value shows the number of available products.</p>
                                    <p> When "Add To Cart" is clicked "In Stock" variable is decreased until reaches 0, thus no longer products can be added to the cart.</p>
                                    <p>The cart is saved in local storage and is restored after refresh.</p>

                                    <p> The cart can also be preserved in the backend when a user is logged.</p>
                                    <p> After logout and logging in again, the cart is retrieved from the backend.</p>
                                    <p> Storing data in the Laravel app is done by clicking the "CHECKOUT" button.</p>
                                    <p> Clicking "Add To Cart" changes the "In Stock" value that shows the number of available products and is decreased to reach 0 when no more products can be added.</p>

                                    <p> At the same time, the total quantity shown on the cart icon is updated accordingly.</p>
                                    <p> Hover over the cart icon to display a small window containing a table with the total number of selected products, product name, price of a single product, and the total number of all items in the basket, also total price and total quantity are placed below the table.</p>
                                    <p> When the user is not login, the button displays a prompt to sign in, and the next button allows to clear the cart stored in local storage.</p>
                                    <p> To clear the cart in local storage and on the backend user should click the buttons "CLEAR CART" and next "CHECKOUT".</p>
                                    <p>Login and Register pages are only visible when the user is not login.</p>
                                    <p> Both pages were built with the Formik library and have the following features: when the user name is too short, the password is too short, email is in not allowed format (not an email), two password fields on the registration form are not equal then prompts in red are shown with correct messages to help user pass login or register part of the app.</p><p> When logging in, registering or logout failed at the backend general message is shown.</p>

                                    <p>The logout link is visible only when the user is logged in.</p>
                                    <p> Clicking it also causes logout not only in the front but also at the backend part of the app.</p>
                                    <p>The whole visual part of the app was built thanks to the Bootstrap 5 library according to Responsive Web Design rules.</p>

                                    <h4 className='textTitle'>Laravel part of the application has the following features:</h4>

                                    <p className='projectText'>The app is created as REST API with routes serving login, register, and log out to fill authentication purposes with help of tokens issued by Sanctum library.</p>
                                    <p> App has also routes for storing and retrieving carts for logged users.</p>
                                    <p> Shop also is served by separate route, as well route for the search of a single product is present.</p>
                                    <p> The token can be revoked when the user logout from React part.</p>

                                    <p>Program preserved data in MariaDB database and has features such as migrating the database and seeding it with dummy data for testing.</p>
                                    <p> Database and app have the following Models representing data in front: Image, User, Product, and pivot table connecting Product and User Model.</p>
                                    <p> User and Product are connected using ManyToMany relation needed for example to serve cart feature.</p> 
                                    <p>Image and Product fill ManyToOne relation.</p>                                                       
                                </Col>                       
                            </Row>                    
                        </div>
                    </div>
                </Card>
                <Card className='mb-5'>
                    <Card.Body className='bg-danger' >        
                        <Card.Text className='d-flex justify-content-center'>
                            <Link to="/" className="text-white me-4">
                                <FontAwesomeIcon icon={faCoffee} />
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <FontAwesomeIcon icon={faCreditCardAlt} />
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <FontAwesomeIcon icon={faFaceKissBeam} />
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <FontAwesomeIcon icon={faGaugeSimpleHigh} />
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <FontAwesomeIcon icon={faRandom} />
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <FontAwesomeIcon icon={faAnchorCircleExclamation} />
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default AboutPage;