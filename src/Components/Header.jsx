import NavButton from "./NavButton";
import StyledHeader from "./StyledHeader";
import StyledTitel from "./StyledTitel";

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitel>Einkaufsliste</StyledTitel>
      <nav>
        <NavButton>DE</NavButton>
        <NavButton>EN</NavButton>
      </nav>
    </StyledHeader>
  );
}
