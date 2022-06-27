import React from 'react';
import { Col, Row } from 'react-bootstrap';
import photo1 from '../../images/painting 1.jpg';
import photo2 from '../../images/painting 2.jpg';
import photo3 from '../../images/painting 3.jpg';

const Card = () => {
    return (
        <Row className='mt-3'>
            <Col md={6} sm={6} >
              <img className='rounded-start' src={photo1} alt='' width={"105%"} height={"100%"}/>
            </Col>

            <Col md={6} sm={6} >
            <img className='mb-2 rounded-end' src={photo3} alt='' width={"90%"}/>
            
            <img src={photo2} alt='' width={"90%"} />
         
           </Col>
            
        </Row>
    );
};

export default Card;