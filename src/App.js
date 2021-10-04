import logo from './logo.svg';
import './App.css';
import { CSSProperties } from 'react-bootstrap';
import { Container, Row , Col , Button , alert , Form } from 'react-bootstrap/'
function App() {
  return (
<div className="App">
  <Container>
    <h3>R.BOOK </h3>
<br> 
</br>
      <h6>To request that the library purchase a book or other item, 
      please complete the form then submit.</h6>
<br>
</br>
     <Form>
      <select class="form-control form-control-sm">
        <option>Choose a product</option>
        <option>Journal</option>
        <option>Book</option>
        <option>Article</option>
        <option>Unknown</option>
</select>
<br></br>
<Row>
          <Col md>
          <Form.Group controlId="forproduct">
      <Form.Label>Product title :</Form.Label>
      <Form.Control  type="title" placeholder="" />
      </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId="forproduct">
      <Form.Label>Author's name :</Form.Label>
      <Form.Control  type="name" placeholder="Enter the full Author name" />
      </Form.Group>
          </Col>
          </Row>
          <br></br>
        <Row>
          <Col md>
          <Form.Group controlId="formEmail">
      <Form.Label>Email Adress :</Form.Label>
      <Form.Control  type="email" placeholder="Example@email.com" />
      </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId="formEmail">
      <Form.Label>Password :</Form.Label>
      <Form.Control  type="Password" placeholder="Enter your password." />
      </Form.Group>
          </Col>
          </Row>
      <br></br>
    <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </Container>
</div>
  );
}

export default App;
