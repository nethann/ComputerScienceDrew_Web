import React from 'react'

//importing utils 
import Carousel from 'react-bootstrap/Carousel';

//importing CSS
import "./Carousel.css"

//importing images
import First from "./Images/First.png"
import Second from "./Images/Second.png"
import Third from "./Images/Third.png"
import Fourth from "./Images/Fourth.png"
import Fifth from "./Images/Fifth.png"
import Sixth from "./Images/Sixth.png"
import Seventh from "./Images/Seventh.png"
import Eighth from "./Images/Eighth.png"

export default function Carousels() {
    return (
        <section className='Carousels-holder'>

            <div className='Carousel-text'>
                <p>AP CSP Making Life Connections</p>
            </div>


            <div className='Carousel'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={First}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Second}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Third}
                            alt="Third slide"
                        />
                    </Carousel.Item><Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Fourth}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Fifth}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Sixth}
                            alt="Third slide"
                        />
                    </Carousel.Item><Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Seventh}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Eighth}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </section>
    )
}
