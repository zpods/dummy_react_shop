import React, {useState, useMemo } from 'react';
import MessageComponent from '../messageComponent/MessageComponent';
import Paginator from '../Paginator/Paginator';
import JumbotronElement from '../jumbotronElement/JumbotronElement';
import { Container, Row,  } from 'react-bootstrap';
import Product from '../product/Product';


function ShopPage ({products, isLoading}){

    let pageItemsSize = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageItemsSize;
        const lastPageIndex = firstPageIndex + pageItemsSize;
        return products.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, products]);
   
    if(isLoading){
        return <MessageComponent/>
    }
    
    return (
        <Container>
            <JumbotronElement/>
            <Row>                
            { currentTableData && currentTableData.map((product) => {
                return (
                <div className='col-md-6 col-lg-3 ' key={product.id}>
                    <Product product={product}/>
                </div>
                )
            })}
            </Row>
            <Paginator
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={products.length}
                pageSize={pageItemsSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </Container>            
    );   
}
export default ShopPage;