import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeaderImg from '../images/desktop-image-hero-1.jpg'
import Image1 from '../images/image-about-dark.jpg'
import Image2 from '../images/image-about-light.jpg'
import '../styles/main.css'

const Header = () => {
    return <>
    {/*Desktop header design*/}
    <Container fluid = "true">
      <Row noGutters>
        <Col lg = {7} sm = {12} style = {{paddingLeft: 0 , paddingRight : 0}}>
          <section className = "header" style = {{backgroundImage : `url(${HeaderImg})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '70vh'}} >
            <nav>
            <div className='nav-links'>
            <ul>
              <li><h4>Room</h4></li>
              <li><a href = '*'>Home</a></li>
              <li><a href = '*'>Shop</a></li>
              <li><a href = '*'>About</a></li>
              <li><a href = '*'>Contact</a></li>
            </ul>
            </div>
            </nav>
          </section>
        </Col>

        <Col lg = {5} sm = {12}>
        
        </Col>
      </Row>
    </Container>

    <Container fluid = 'true'>
      <Row noGutters>
        <Col lg = {4} sm = {12}>
           <section className = "about1" style = {{backgroundImage : `url(${Image1})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '40vh'}} ></section>
        </Col>

        <Col lg = {4} sm = {12}>
        <section className = 'aboutText'>
          <h3> About our furniture</h3>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique , or pick a cohesive theme that best fits
            your interests and what inspires you. Find the furniture pieces you need , from traditional to contemporary styles or anything in between . Product specialists help 
            you create your dream space.
          </p>
        </section>
        </Col>

        <Col lg = {4} sm = {12}>
           <section className = "header" style = {{backgroundImage : `url(${Image2})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '40vh'}} ></section>
        </Col>
      </Row>
    </Container>
    </>

}


export default Header