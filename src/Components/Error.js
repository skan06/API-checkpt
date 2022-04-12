import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    let navigate=useNavigate()
  return (
    <div className='er'>
    <Button  className='bt' variant='danger' onClick={()=>navigate(-1)}>Back to previous page</Button>
    </div>
  )
}

export default Error