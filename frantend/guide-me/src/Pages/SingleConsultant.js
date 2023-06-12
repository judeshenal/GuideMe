import React, { useEffect, useState } from "react";
import Navbar  from "../components/Header";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import './ConsultantStyles.css'
import { FaTrash } from "react-icons/fa";

export default function SingleConsultant()
{
    const [review, setReview] = useState([
        {
            review: 'He is a friendly communicator and has built a rapport with every division in the company',
            reviewBy: 'Akeel Ferdi'
        },
        {
            review: 'His positive attitude and willingness to listen are highly appreciated by her coworkers.',
            reviewBy: 'Karles Meidi'
        },
    ])
    return(
        <>
    <div>
        <Navbar/>
            <Container>
                <div className="consultant-top-content">
                    <h3>Consultant Profile</h3>
                </div>
                <br/><br/>
                <div className="consultant-review-content" style={{height:'12rem'}}>
                    <h5 className="p-2">Experience</h5></div> 
                <br/><br/>
                <div className="consultant-review-content">
                    <h5 className="p-2">Reviews</h5>
                    {review.map((data,id) => (
                        <div>
                            <p className="p-1">{data.review} <span style={{float:'right', cursor:'pointer'}}><FaTrash size={20}/></span></p>
                            <h6 style={{textAlign:'right'}}>- {data.reviewBy}</h6>
                            <hr/>
                        </div>
                    ))}
                 
                </div>
                <div className="consultant-review-input">
                        <input type="text" style={{width:'18rem', backgroundColor:'#efeff1', borderRadius:'5px 0 0 5px'}}/>
                        <button className="consultant-review-input-btn">Add Review</button>
                    </div>

            </Container>
        <Footer/>
    </div>
        </>
    );
}