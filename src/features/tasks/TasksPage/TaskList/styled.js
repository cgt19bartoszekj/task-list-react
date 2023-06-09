import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
	margin: 0;
	list-style: none;
	padding: 0;
`;

export const Task = styled.li`
	display: grid;
	grid-gap: 10px;
	align-items: center;
	grid-template-columns: auto 1fr auto auto;
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

export const EditButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const SaveButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Content = styled.span`
	${({ done }) =>
		done &&
		css`
			color: ${({ theme }) => theme.colors.darkGrey};
			text-decoration: line-through;
		`}
`;

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.teal};
	text-decoration: none;
	transition: 1s;

	&:hover {
		color: ${({ theme }) => theme.colors.brightTeal}
	}
`;
