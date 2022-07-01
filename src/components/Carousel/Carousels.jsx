import React , { Component } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import bgItemKurasan from '../../images/backgraund.png'
import './Carousels.css'

class CarouselImag extends Component{
    render(){
        return(
            <Carousel className='Carousel'>
                <Carousel.Item>
                    <img className="d-block w-100 imgesa" src={bgItemKurasan} alt="First slide"/>
                    <Carousel.Caption className='d-flex flex-column align-items-start mb-5'>
                        <h5 className='Title fs-1 text-nowrap'>Pani Provance</h5>
                        <p className='text-start w-75'>The hottes pastries you have ever seen</p>
                        <Button className='BtnCatalog'>Каталог</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 imgesa" src={bgItemKurasan} alt="First slide"/>
                    <Carousel.Caption className='d-flex flex-column align-items-start mb-5'>
                        <h5 className='Title fs-1 text-nowrap'>Pani Provance</h5>
                        <p className='text-start w-75'>The hottes pastries you  have ever seen</p>
                        {/* <Button className='btn BtnCatalog'>Контакт</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}


export default CarouselImag