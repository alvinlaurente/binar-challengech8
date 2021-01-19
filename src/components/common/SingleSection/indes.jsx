import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.scss";

const SingleSection = () => (
  <Jumbotron fluid className="d-flex align-items-center single-section single-section--background">
    <Container>
      <Row className="d-inline-flex">
        <Col md={{ span: 6, offset: 6 }} className="text-left">
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default SingleSection;