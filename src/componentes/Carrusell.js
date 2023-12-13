import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Carrusell = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="https://media.revistagq.com/photos/5dfcb48d97458e0008dce3f6/16:9/w_1600,c_limit/GettyImages-1179647150.jpg" alt="First slide"/>
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://doralfamilyjournal.com/wp-content/uploads/2018/12/santa.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <img
            className="d-block w-100"
            src="https://media.meer.com/attachments/95bf53e95a3a80093c5e6bed12ef742d93bf6887/store/fill/1470/827/298417b9ced250ed6497e176018c8f8b8742d618003b364c65422412caa6/Cada-lugar-del-mundo-tiene-distintas-tradiciones-que-son-parte-de-su-celebracion-navidena.jpg"
            alt="Third slide"
            
        />
        <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Carrusell