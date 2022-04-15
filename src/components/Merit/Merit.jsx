import React from 'react'
import { Figure, Container, Row, Col } from 'react-bootstrap'
import kurasan from '../../images/kurasan.svg'
import five from '../../images/five.svg'
import truck from '../../images/truck.svg'
import potholders from '../../images/potholders.svg'
import './Merit.css'


const card = [
  {id: 1, title: 'Самые свежие ингридиенты', src: kurasan},
  {id: 2, title: 'Более 5 лет на рынке', src: five },
  {id: 3, title: 'Быстрая доставка', src: truck},
  {id: 4, title: 'Выпечка ручной работ', src: potholders}
]


export default function Merit() {
  return (
    <Container className='mt-4'>
      <Row>
        {card.map(({ id, title, src }) => (
          <Col key={id} md={3} xs={6}> 
            <Figure className='MeritConteiner'>
              <Figure.Image
                className='MeritIcon'
                alt="Error"
                src={src}/>
              <Figure.Caption className='MeritPage text-center'>{title}</Figure.Caption>
            </Figure> 
          </Col>
        ))}
      </Row>
    </Container>
  )
}