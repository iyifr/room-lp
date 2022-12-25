import React , {useState, useEffect} from 'react';
import ResponsiveNav from './ResponsiveNav';
import {ReactComponent as Arrow} from '../images/icon-arrow.svg'
import {ReactComponent as Right} from '../images/icon-angle-right.svg';
import {ReactComponent as Left} from '../images/icon-angle-left.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image1 from '../images/image-about-dark.jpg'
import Image2 from '../images/image-about-light.jpg'
import '../styles/main.css'

const HeaderMobile = ({slides}) => {

     const [currentIndex , setCurrentIndex] = useState(1)

function Forwards () {
  const isLastSlide =  currentIndex === slides.length - 1
  let newIndex = isLastSlide ? 0 : currentIndex + 1

  setCurrentIndex(newIndex)
 
} 

function Backwards () {
  const isFirstSlide =  currentIndex === 0
  let newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1

  setCurrentIndex(newIndex)
}
 


  return (
    <>
    <section className = "mobileTop"  style = {{backgroundImage : `url(${slides[currentIndex].url})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '53vh', marginTop : '0', paddingTop: '5vh'}} >
            <ResponsiveNav />
     </section>

     <div className='buttonsMobile'>
            <button onClick = {Backwards} > <Left /> </button>
            <button onClick = {Forwards} > <Right /> </button>
          </div>

      <section className = 'SlideText'>
          <h1>{slides[currentIndex].textHeader}</h1>
          <p>{slides[currentIndex].textMain}</p>
          <h3> Shop now </h3> <Arrow  width = '150' height = '43' viewBox='-62 16 115 1' style = {{marginLeft : '120px', marginTop : '-32px'}}/>
        </section>
        

          <Container fluid = 'true'>
      <Row noGutters>
        <Col lg = {4} sm = {12} md = {12}>
           <section className = "about1" style = {{backgroundImage : `url(${Image1})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '40vh'}} ></section>
        </Col>

        <Col lg = {4} sm = {12} md = {12}>
        <section className = 'aboutText'>
          <h3> About our furniture</h3>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique , or pick a cohesive theme that best fits
            your interests and what inspires you. Find the furniture pieces you need , from traditional to contemporary styles or anything in between . Product specialists help 
            you create your dream space.
          </p>
        </section>
        </Col>

        <Col lg = {4} sm = {12} md = {12}>
           <section className = "header" style = {{backgroundImage : `url(${Image2})`, width: '100%',
           backgroundPosition : 'center' , backgroundSize: 'cover', height: '40vh'}} ></section>
        </Col>
      </Row>
    </Container>
    
      
    </>
  )
}

export default HeaderMobile
