import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCreditCardAlt, faFaceKissBeam, faGaugeSimpleHigh, faRandom, faAnchorCircleExclamation } from '@fortawesome/free-solid-svg-icons'

function Footer (){
    return (
        <footer className="text-center text-white" style={{backgroundColor: "purple"}}>   
            <div className="container">      
                <section className="mt-5">        
                    <div className="row text-center d-flex justify-content-center pt-5">          
                        <div className="col-md-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="/" className="text-white">Home</Link>
                            </h6>
                        </div>         
                        <div className="col-md-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="/about" className="text-white">About</Link>
                            </h6>
                        </div>                  
                        <div className="col-md-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="/shop" className="text-white">Shop</Link>
                            </h6>
                        </div>                    
                        <div className="col-md-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="/contact" className="text-white">Contact</Link>
                            </h6>
                        </div>                             
                    </div>        
                </section>
                <hr className="my-5"/>      
                <section className="mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                distinctio earum repellat quaerat voluptatibus placeat nam,
                                commodi optio pariatur est quia magnam eum harum corrupti
                                dicta, aliquam sequi voluptate quas.
                            </p>
                        </div>
                    </div>
                </section>     
                <section className="text-center mb-5">
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
                </section>      
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright: 
            </div>  
        </footer>
    )
}
export default Footer;