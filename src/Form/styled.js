import styled from "styled-components";

export const Wrapper = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 15px;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

export const Input = styled.input`
	border: 2px solid #dcdcdc;
	padding: 10px;
`;

export const Button = styled.button`
	background-color: #007382;
	padding: 10px;
	color: #ffffff;
	border: none;
	transition: 1s;
	cursor: pointer;

	&:hover {
		background-color: #008799;
		transform: scale(1.1);
	}
`;
