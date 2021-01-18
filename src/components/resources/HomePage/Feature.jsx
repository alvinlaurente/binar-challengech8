import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style/Feature.scss';

const Feature = () => (
  <Jumbotron fluid className="feature feature--background">
    <Container>
      <Row className="justify-content-end">
        <Col md={6} className="text-left feature__col--margin-top">
          <div className="feature__smallCaption">What's so special?</div>
          <div className="text-uppercase feature__bigCaption">Features</div>

          {/* Vertical Stepper */}
          <div className="step">
            <div className="position-relative">
              <div className="step__circle step__circle--complete"></div>
              <div className="step__line step__line--complete"></div>
            </div>
            <div className="d-inline-block step__content">
              <div className="step__contentTitle">Traditional games</div>
              <p className="step_contentCaption">
                If you miss your childhood, we provide many traditional games
                here
              </p>
            </div>
          </div>

          <div className="step">
            <div className="position-relative">
              <div className="step__circle step__circle--active"></div>
            </div>
            <div className="d-inline-block step__content">
              <div className="step__contentTitle">Game suit</div>
            </div>
          </div>

          <div className="step">
            <div className="position-relative">
              <div className="step__circle step__circle--active"></div>
            </div>
            <div className="d-inline-block step__content">
              <div className="step__contentTitle">TBD</div>
            </div>
          </div>
          {/* End of Vertical Stepper */}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Feature;