import React, { useEffect, useState } from "react";
import Navbar  from "../components/Header";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import './PaymentPageStyles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import card from '../Assets/card.png';
import cardless from '../Assets/cardless.png'

export default function TransactionHistory()
{
    const [transactionDetail, setTransactionDetail] = useState([
        {
            icon: card,
            amount: '$10',
            date: '2023.04.4',
            descriptioon: 'Made through Visa'
        },
        {
            icon: card,
            amount: '$10',
            date: '2023.04.4',
            descriptioon: 'Made through Visa'
        },
        {
            icon: cardless,
            amount: '$10',
            date: '2023.04.4',
            descriptioon: 'Made through Visa'
        },
        {
            icon: cardless,
            amount: '$10',
            date: '2023.04.4',
            descriptioon: 'Made through Visa'
        },
        {
            icon: card,
            amount: '$10',
            date: '2023.04.4',
            descriptioon: 'Made through Visa'
        },
    ]);

    return(
        <>
        <div>
            <Navbar/>
                <Container>
                    <div className="payment-page-content mt-5">
                        <h3>Transaction History</h3>
                            <Row className="payment-history-header">
                                <Col>Status</Col>
                                <Col>Amount</Col>
                                <Col>Date</Col>
                                <Col>Description</Col>
                            </Row>
                {transactionDetail.map((data,id)=>(
                    <Row style={{fontWeight:'600', padding:'15px'}}>
                        <Col><img src={data.icon} className="transaction-history-status-img"/></Col>
                        <Col>{data.amount}</Col>
                        <Col>{data.date}</Col>
                        <Col>{data.descriptioon}</Col>
                    </Row>

                ))}
                      
                    </div>
                </Container>
            <Footer/>
        </div>
        </>
    );
}