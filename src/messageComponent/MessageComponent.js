import React from 'react';
import { Card } from 'react-bootstrap';

function MessageComponent ({message}){
    return (
        <Card className='shadow-sm'>
            <Card.Title className='m-5 text-center'>{message.title}</Card.Title>
            <Card.Text className='p-4 text-center'>{message.text}</Card.Text>
        </Card>
    )
}
export default MessageComponent;