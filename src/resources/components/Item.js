import React from 'react'
import { Col,Card } from 'react-bootstrap'
function Item (props) {
  return (
    <>
     <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}
export default Item;
