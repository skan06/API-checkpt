import React from 'react'
import { Card,Button } from 'react-bootstrap'

const UserCard = ({x}) => {
  return (
    <div>
    <Card bg='warning' style={{ width: "18rem" }}>
        <Card.Body variant="light">
        <Card.Title variant='light'>{x.name}</Card.Title>
        <Card.Text>{x.username}</Card.Text>
        <Card.Text>{x.email}</Card.Text>
        <Button variant="danger">Click Here</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard