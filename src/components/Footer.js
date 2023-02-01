import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

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
			    <FooterLink href="#">nfo@example.com</FooterLink>
            </ul>
		</Column>
		<Column>
			<Heading>Location</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
