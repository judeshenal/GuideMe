import React, { useEffect, useState } from "react";
import Navbar  from "../components/Header";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import './PaymentPageStyles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import visa from '../Assets/paymentvisa.png';
import american from '../Assets/paymentamerican.png';
import master from '../Assets/paymentmaster.png';

export default function PaymentPage()
{
    const [amount, setAmount] = useState('23000.00');

    return(
        <>
        <div>
            <Navbar/>
                <Container>
                    <div className="payment-page-content m-2">
                        <div className="payment-page-billing-field d-flex justify-content-between">
                            <p className="payment-input-label">Billing Total</p>
                            <p className="payment-input-label">Rs. {amount}</p>
                        </div><br/>
                        <Row>
                            <div className="payment-page-pay-method m-1 d-flex justify-content-between">
                                <img src={visa} className="payment-page-pay-method-img"/>
                                <img src={american} className="payment-page-pay-method-img"/>
                                <img src={master} className="payment-page-pay-method-img"/>
                            </div>
                        </Row><br/>
                        <Row>
                            <p className="payment-input-label">Customer Name</p>
                            <Row className="m-1">
                                <input type="text" className="payment-input"/>
                            </Row>
                        </Row><br/>
                        <Row>
                            <p className="payment-input-label">Address</p>
                            <Row className="m-1">
                                <input type="textArea" className="payment-input" style={{height:'10rem'}}/>
                            </Row>
                        </Row><br/>
                        <Row>
                            <Col>
                                <p className="payment-input-label">Contact Number 1</p>
                                <input type="number" className="payment-input"/>
                            </Col>
                            <Col>
                                <p className="payment-input-label">Contact Number 2</p>
                                <input type="number" className="payment-input"/>
                            </Col>
                        </Row><br/>
                        <div className="d-flex justify-content-center">
                          <Link to='/transactionHistory'> 
                            <button className="make-payment-btn">Proceed to Payment</button>
                          </Link> 
                        </div>
                    </div>
                </Container>
            <Footer/>
        </div>
        </>
    );
}