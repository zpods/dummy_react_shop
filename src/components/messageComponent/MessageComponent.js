import React from 'react';
import { Card } from 'react-bootstrap';
import SpinnerComponent from '../spinnerComponent/SpinnnerComponent';
import { useSelector } from 'react-redux';

function MessageComponent ({spinner}){

  const { isLoading, error } = useSelector(state => state.mainShopPageAndCart);
  const { searchIsLoading, searchError } = useSelector(state => state.searchPage);
  const { logRegIsLoading, logRegError } = useSelector(state => state.loginRegisterLogout);
  const message = error ? error : (logRegError ? logRegError : searchError)
    return (
      <React.Fragment>
        <Card className='my-5 shadow-sm'>
          <Card.Body>
            <Card.Title className='pe-3 text-center'>{message}</Card.Title>
            
          </Card.Body>
        </Card>
        { (isLoading || searchIsLoading || logRegIsLoading) && <div className='p-5 w-100 text-center'><SpinnerComponent/></div> }      
      </React.Fragment>
    )
}
export default MessageComponent;