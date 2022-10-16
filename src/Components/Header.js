import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderImg from '../images/desktop-image-hero-1.jpg'

const Header = () => {
    return <>
    {/*Desktop header design*/}
    <Container fluid="lg">
      <Row>
        <Col lg = {8} sm = {12}>
          <div className = "Chair1">
          
          </div>
        </Col>

        <Col lg = {4} sm = {12}>
          1 of 1
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col lg = {4} sm = {12}>
          1 of 1
        </Col>

        <Col lg = {4} sm = {12}>
          1 of 1
        </Col>

        <Col lg = {4} sm = {12}>
          1 of 1
        </Col>
      </Row>
    </Container>
    </>

}


export default Header