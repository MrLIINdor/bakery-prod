import React , { Component } from 'react'
import CarouselImag from '../components/Carousel/Carousels'
import MeritIcon from '../components/Merit/Merit'
import './home.css'




class Home extends Component {
    render() {
        return (
            <div>
                <CarouselImag/>
                <MeritIcon/>
                
            </div>
        )
    }
}

export default Home