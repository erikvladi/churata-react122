import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Creditoo = () => {
  return (
    <div className='row' id='creditoo'>
        <div className='col'>
            <Card style={{ width: '50rem', justifyContent: 'left'}}>
                <Card.Img variant="top mt-5" src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/44/16/115853b2f40b5e6.jpg" />
                <Card.Body>
                    <Card.Title>Creditos</Card.Title>
                    <Card.Text>
                        <p class="card-text">v1: diciembre de 2023</p>

                        <p class="card-text">Actualizado: diciembre de 2023</p>

                        <p class="card-text">ISBN: 978-XX-XXXXX-XX-X</p>

                        <p class="card-text">Copyright © 2023 Churata Erik</p>

                        <p class="card-text">Editado por Churata Erik</p>

                        <p class="card-text">www.cnchurata.com</p>

                        <p class="card-text">contacto@cnchurata.com</p>

                        <p class="card-text">Todos los derechos reservados. Bajo las sanciones establecidas en el ordenamiento jurídico, queda rigurosamente prohibida, sin autorización escrita de los titulares del copyright, la reproducción total o parcial de esta obra por cualquier medio o procedimiento, comprendidos la reprografía y el tratamiento informático.</p>

                        <p class="card-text"><small class="text-body-secondary">inf-122"A"</small></p>
                    </Card.Text>
                    <Button variant="primary">Home</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Creditoo