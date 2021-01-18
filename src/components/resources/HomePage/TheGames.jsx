import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import img from 'assets/images/index/rockpaperstrategy-1600.jpg';
import './style/TheGames.scss';

const TheGames = () => (
  <Jumbotron fluid className="theGames theGames--background">
    <Container className="h-100 text-left d-flex align-items-center">
      <Row className="mx-auto">
        <Col lg={4}>
          <div className="theGames__smallCaption">What's so special?</div>
          <div className="text-uppercase theGames__bigCaption">The games</div>
        </Col>

        {/* Carousel */}
        <Col lg={8} className="pt-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-75 m-auto"
                src={img}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75 m-auto"
                src={img}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75 m-auto"
                src={img}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75 m-auto"
                src={img}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75 m-auto"
                src={img}
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default TheGames;