import React from 'react'
import { Figure, Container, Row, Col } from 'react-bootstrap'
import kurasan from '../../images/kurasan.svg'
import five from '../../images/five.svg'
import truck from '../../images/truck.svg'
import potholders from '../../images/potholders.svg'
import './Merit.css'


export default function Merit() {
  return (
    <Container fluid className='mt-4'>
      <Row>
        <Col> 
          <Figure className='MeritConteiner'>
            <Figure.Image
              className='MeritIcon'
              alt="Error"
              src={kurasan}/>
            <Figure.Caption className='MeritPage text-center'>
              Самые свежие ингридиенты
            </Figure.Caption>
          </Figure> 
        </Col>



        <Col>
          <Figure className='MeritConteiner'>
            <Figure.Image
              className='MeritIcon'
              alt="Error"
              src={five}/>
            <Figure.Caption className='MeritPage text-center'>
              Более 5 лет на рынке
            </Figure.Caption>
          </Figure>
        </Col>



        <Col>
          <Figure className='MeritConteiner'>
            <Figure.Image
              className='MeritIcon'
              alt="Error"
              src={truck}/>
            <Figure.Caption className='MeritPage text-center'>
              Быстрая доставка
            </Figure.Caption>
          </Figure>
        </Col>



        <Col>
          <Figure className='MeritConteiner'>
            <Figure.Image
              className='MeritIcon'
              alt="Error"
              src={potholders}/>
            <Figure.Caption className='MeritPage text-center'>
              Выпечка ручной работ
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  )
}
