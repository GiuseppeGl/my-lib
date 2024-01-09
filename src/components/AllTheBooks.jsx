import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

const AllTheBooks = () => {
  console.log(fantasy)

  return (
    <Row>
      {fantasy.map((e) => {
        return (
          <Col xs={12} md={4} key={e.asin}>
            <Card className="book-cover">
              <Card.Img variant="top" src={e.img} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks
