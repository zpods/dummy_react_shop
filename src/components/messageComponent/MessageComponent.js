import React from 'react';
import { Card } from 'react-bootstrap';
import SpinnerComponent from '../spinnerComponent/SpinnnerComponent';

function MessageComponent ({spinner, message}){

  
    return (
      <React.Fragment>
        <Card className='shadow-sm'>
          <Card.Body>
            <Card.Title className='mt-2 text-center'>{message.title}</Card.Title>
            <Card.Text className='pe-3 text-center'>{message.text}</Card.Text>
          </Card.Body>
        </Card>
        { spinner && <div className='p-5 w-100 text-center'><SpinnerComponent/></div> }      
      </React.Fragment>
    )
}
export default MessageComponent;