import styled, { css } from "styled-components";

export const List = styled.ul`
	margin: 0;
	list-style: none;
	padding: 0;
`;

export const Task = styled.li`
	display: grid;
	grid-gap: 10px;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	border-bottom: 1px solid
		${({ theme }) => theme.colors.grey};
	padding: 10px;

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`}
`;

export const Button = styled.button`
	border: none;
	color: ${({ theme }) => theme.colors.white};
	width: 30px;
	height: 30px;
	padding: 0;
	transition: background 0.5s;
	cursor: pointer;
`;

export const ToggleDoneButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.green};

	&:hover {
		background-color: ${({ theme }) =>
		theme.colors.brightGreen};
	}
`;

export const RemoveButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.darkRed};
	
	&:hover {
		background: ${({ theme }) => theme.colors.red};
	}
`;

export const Content = styled.span`
	${({ done }) =>
		done &&
		css`
			color: ${({ theme }) => theme.colors.darkGrey};
			text-decoration: line-through;
		`}
`;
