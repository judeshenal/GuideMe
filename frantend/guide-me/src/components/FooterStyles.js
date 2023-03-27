import styled from 'styled-components';

export const Box = styled.div`
background: black;
width: 100%;
position:absolute;
left:1;
bottom:0;


@media (max-width: 1000px) {
	
	
}
`;


export const Container = styled.div`
    margin-top: 100px;
    padding: 1px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	bottom:0 auto;

	//  background: red; 
`

export const Column = styled.div`

display: flex;
flex-direction: column;
text-align: left;

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
    minmax(210px, 1fr));
                        grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {

	
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`

font-size: 24px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;
