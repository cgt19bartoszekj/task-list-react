import styled from "styled-components";

export const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.colors.white};
	margin-bottom: 15px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr auto;
	padding: 20px;
	border-bottom: 1px solid
		${({ theme }) => theme.colors.grey};

		@media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
		grid-template-columns: 1fr;
	}
`;

export const Title = styled.h2`
	margin: 0;
`;

export const Body = styled.div`
	padding: 20px;
`;
