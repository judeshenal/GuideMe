import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import pic from '../Assets/GoogleMap.png'

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<p style={{color: "white"}}>The Most Eminent Travel Consultant Service provider in major cities and overseas with reliability since 2022. 
We are committed to provide reliable client support.</p>
		</Column>
		<Column>
			<Heading>Visa Services</Heading>
			<ul style={{color: "white"}}>
                <li>Green Card</li>
                <li>PR Applicants</li>
                <li>Visa Consultancy</li>
                <li>Travel Insurance</li>
                <li>Work Permits</li>
                <li>Abroad Study</li>
                <li>International Permit</li>
            </ul>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
            <ul style={{color: "white", liststyle: "none"}}>
                <li>e-mail</li>
			    <FooterLink href="#" style={{color: "#1e90ff"}}>nfo@example.com</FooterLink>
                <li>Contact No:</li>
			    <FooterLink href="#">+94 (77) 456 7890</FooterLink>
                <li>Address:</li>
			    <FooterLink href="#">78, Udula Road, Ratnapura, Sri Lanka</FooterLink>
            </ul>
		</Column>
		<Column>
			<Heading>Location</Heading>
			<img src = {pic}/>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
