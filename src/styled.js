import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	display: block;
	padding: 20px;
	&.active {
		font-weight: 700;
	}
`;
