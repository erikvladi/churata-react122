import React from 'react'
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Formularioo = () => {
  return (
    <div className='row mt-5' id='formularioo'>
        <div className='col-6 auto justify-contect-center aling-items-center'>
            <form>
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
            <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
            <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={5} label='Message' />

            <MDBBtn type='submit' className='mb-4' block>
                Enviar
            </MDBBtn>
            </form>
        </div>
    </div>
  )
}

export default Formularioo