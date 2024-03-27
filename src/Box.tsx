import styled from "styled-components";

const Design = styled.div<{ $primary: string, $secondary: string }>`
	box-sizing: border-box;
	background-color: ${props => props.$secondary};
	color: ${props => props.$primary};
    border: 4px solid white;
	height: 500px;
	h6 {
		height: 20px;
		text-align: left;
		font-size: 1.5em;
		border-bottom: 0px 10px solid ${props => props.$primary};
		background-color: ${props => props.$secondary};
	}
	p {
		color: ${props => props.$secondary};
		background-color: ${props => props.$primary};
	}
`;

function Box({ primary, secondary }: { primary: string, secondary: string }) {
return (
	<>
		<Design $primary={primary} $secondary={secondary} >
		<h6>Title</h6>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam.</p>
		</Design>;
	</>)
}

export default Box;