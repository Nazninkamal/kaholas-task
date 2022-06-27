import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import women from '../../images/images.jpg';
import { FaStar } from "react-icons/fa";
import {GrFormNext } from "react-icons/gr";
import {FiHeart } from "react-icons/fi";
import {RiShareForwardLine } from "react-icons/ri";
import './Details.css'
import Card from '../Card/Card';

const Details = () => {
    return (
       <>
        <Row >
           <Col md={6} sm={5} className='mt-5'>
              <h5 className='text-lg-start'>In this 5 day class we will explore arists Monet, Matisse, Van Gogh, among others and then recreate panting using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</h5>
              
              <div className='d-flex align-items-center mt-4'>
              <img className='rounded-circle' src={women} alt=""  width={"40px"} height={"40px"}/>
              <h5 className='ms-3 fw-bold' style={{color: "#5233FF"}}> Kimberly R Moseler</h5>
              </div>

              <div className='d-flex mt-2'>
              <h5 style={{color: "#FFC433"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h5>
              <h6 className='ps-2 mt-1' style={{color: "gray"}}>467 total reviews for this teacher</h6>
              </div>
              <div className='d-flex ' >
              <h5 style={{color: "#FFC433"}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h5>
              <h6 className='ps-2 mt-1' style={{color: "gray"}}>5 reviews for this class</h6>
              </div>
            
              <h5 className='mt-1'> Completed by 21 learners</h5>
             
             <div className='d-flex justify-content-between mt-4'>
             <Button style={{backgroundColor:"#5233FF", color:"white"}} className=' px-4 rounded-pill fs-4 '>See Class Schedule <GrFormNext/> </Button>
            
             <h4 className='mt-2' style={{color: "#5233FF"}}> < FiHeart/> Save</h4> 
             <h4 className='mt-2' style={{color: "#5233FF"}}> < RiShareForwardLine/> Share</h4> 
             </div>
             
           </Col>

           <Col md={6} sm={6}>
              <Card/>
           </Col>
        </Row>
       </>
    );
};

export default Details;