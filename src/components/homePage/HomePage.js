import React, { useEffect } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageComponent from '../imageComponent/ImageComponent';
import  styles from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { localStorageCart } from '../storeSlice/mainShopPageAndCart/mainShopPageAndCart';

function HomePage () {

  const dispatch = useDispatch();
  const imageCarousel = styles.imageCarousel + ' d-block w-100';
  const imageHeading = { 
    style: {borderRadius: "50%", width: "140px", height: "140px"},
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    alt: "Generic placeholder image"
  };
  const imageParagraph = {
    style: { maxWidth: "500px", maxHeight: "500px"},
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_180c681cdac%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_180c681cdac%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    alt: "Generic placeholder image",
    dataSrc: "holder.js/500x500/auto",
    dataHolderRendered: "true",
  }

  useEffect(() => {
    dispatch(localStorageCart());
  }, [dispatch])

    return (
      <div className={styles.carouselMargin}>
        <Carousel className='mb-5 h-50'>
          <Carousel.Item >
            <img
              className={imageCarousel}
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p><Link className="btn btn-lg btn-primary" to="/register" role="button">Sign up today</Link></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={imageCarousel}
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><Link className="btn btn-lg btn-primary" to="/register" role="button">Sign up today</Link></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={imageCarousel}
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Third slide"
            />
            <Carousel.Caption className='text-left'>
              <h3>Third slide label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id .</p>
              <p><Link className="btn btn-lg btn-primary" to="/register" role="button">Sign up today</Link></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>        
          <Row >
            <Col lg="4" className='d-flex flex-column align-items-center'>
              <ImageComponent image={imageHeading} src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image"/>
              <h2 className='m-3'>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac,   vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><Link className="btn btn-secondary" to="/shop" role="button">View details »</Link></p>
            </Col>
            <Col lg="4" className='d-flex flex-column align-items-center'>
              <ImageComponent image={imageHeading} src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image"/>
              <h2 className='m-3'>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><Link className="btn btn-secondary" to="/shop" role="button">View details »</Link></p>
            </Col>
              <Col lg="4" className='d-flex flex-column align-items-center'>
              <ImageComponent image={imageHeading} src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image"/>
              <h2 className='m-3'>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><Link className="btn btn-secondary" to="/shop" role="button">View details »</Link></p>
            </Col>
          </Row>  
          <hr></hr>
          <Row>
            <Col md="7">
              <h2 >First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </Col>
            <Col md="5">
              <ImageComponent image={imageParagraph} ></ImageComponent>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="7" className="order-md-2">
              <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </Col>
            <Col md="5" className="order-md-1">
              <ImageComponent image={imageParagraph} ></ImageComponent>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md="7">
              <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </Col>
            <Col md="5">
              <ImageComponent image={imageParagraph} ></ImageComponent>
            </Col>
          </Row>
          <hr></hr>
        </Container>
      </div>
    );
}

export default HomePage;