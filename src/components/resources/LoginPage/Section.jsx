import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ROUTES from 'configs/routes';
import './section.scss'

const Section = () => (
  <Jumbotron fluid className="d-flex align-items-center singleSection singleSection--background">
    <Container>
      <Row className="d-flex">
        <Col md={{ span: 6, offset: 6 }} className="text-left">

          {/* Form */}
          <Form className="loginForm">
            <Form.Group controlId="username">
              <Form.Label className="loginForm__label">USERNAME</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" required></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="loginForm__label">PASSWORD</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" required></Form.Control>
            </Form.Group>
            <div className="mb-3 loginForm__signUpNavigation">
              Don't have account? <a href={ROUTES.SIGNUP} className="loginForm__signUpNavigation--color">Sign Up Now</a>
            </div>
            <Button type="submit" variant="warning"  className="loginForm__button">LOGIN</Button>
          </Form>
          {/* End of Form */}

        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Section;