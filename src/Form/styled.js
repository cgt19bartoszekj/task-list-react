import styled from "styled-components";

export const Wrapper = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 15px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		grid-template-columns: 1fr;
	}
`;

export const Input = styled.input`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	padding: 10px;
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.teal};
	padding: 10px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	transition: 1s;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.brightTeal};
		transform: scale(1.1);
	}
`;
