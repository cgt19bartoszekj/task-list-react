import styled from "styled-components";

export const Button = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.teal};
	transition: 1s;

	&:hover {
		color: ${({ theme }) => theme.colors.brightTeal};
	}

	&:disabled {
		color: #b3b3b3;
		cursor: default;
	}
`;
