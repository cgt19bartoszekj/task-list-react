import { StyledNavLink } from "../../styled";
import "./styled";
import { StyledNav } from "./styled";

export const Navigation = () => (
  <StyledNav>
    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
    <StyledNavLink to="/autor">O autorze</StyledNavLink>
  </StyledNav>
);