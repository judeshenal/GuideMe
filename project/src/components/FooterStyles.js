import styled from 'styled-components';

export const Box = styled.div`
background: black;
width: 100%;
position:absolute;
left:0;
bottom:0;
right:0;


@media (max-width: 1000px) {
	
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	bottom:0;

	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-bottom: 10px;
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
margin-bottom: 40px;
font-weight: bold;
`;
