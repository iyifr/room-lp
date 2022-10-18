import React , {useState} from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {ReactComponent as Right} from '../images/icon-angle-right.svg';
import {ReactComponent as Left} from '../images/icon-angle-left.svg';
import Image1 from '../images/image-about-dark.jpg'
import Image2 from '../images/image-about-light.jpg'
import {ReactComponent as Arrow} from '../images/icon-arrow.svg'
import '../styles/main.css'

const Header = ({slides}) => {
  const [currentIndex , setCurrentIndex] = useState(1)

function Forwards () {
  const isLastSlide =  currentIndex === slides.length - 1
  let newIndex = isLastSlide ? 0 : currentIndex + 1

  setCurrentIndex(newIndex)
 
} 

function Backwards () {
  const isFirstSlide =  currentIndex === 0
  let newIndex = isFirstSlide ? slides.length - 1 : currentIndex + 1

  setCurrentIndex(newIndex)
 
} 
    return <>
    {/*Desktop header design*/}
    <Container fluid = "true">
      <Row noGutters>
        <Col lg = {7} sm = {12} style = {{paddingLeft: 0 , paddingRight : 1}}>
          <section className = "header" style = {{backgroundImage : `url(${slides[currentIndex].url})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '82vh'}} >
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
            <section className = 'SlideText'>
          <h1>{slides[currentIndex].textHeader}</h1>
          <p>{slides[currentIndex].textMain}</p>
          <h3> Shop now </h3> <Arrow  width = '150' height = '43' viewBox='-62 16 115 1' style = {{marginLeft : '120px', marginTop : '-32px'}}/>
        </section>
        <div className='buttons'>
            <button onClick = {Backwards} > <Left /> </button>
            <button onClick = {Forwards} > <Right /> </button>
          </div>
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