import React from 'react'
import Button from 'react-bootstrap/Button';

const Botoness = () => {
  return (
    <div className='row mt-5'id='botoness'>
      <div>
        <>
          <Button variant="primary">dia 1</Button>{' '}
          <Button variant="secondary">dia 2</Button>{' '}
          <Button variant="success">dia 3</Button>{' '}
          <Button variant="warning">dia 4</Button>{' '}
          <Button variant="danger">dia 5</Button>{' '}
          <Button variant="info">dia 6</Button>{' '}
          <Button variant="light">dia 7</Button>{' '}
          <Button variant="dark">dia 8</Button>
          <Button variant="link">Feliz Navidad</Button>
        </>
      </div>
    </div>
  )
}

export default Botoness