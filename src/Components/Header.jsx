import NavButton from "./NavButton";
import StyledHeader from "./StyledHeader";
import StyledTitel from "./StyledTitel";
import useStore from "../hooks/useStore";

export default function Header() {
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  return (
    <StyledHeader>
      <StyledTitel>
        {language === "de" ? "Einkaufsliste" : "Shopping list"}
      </StyledTitel>
      <nav>
        <NavButton
          disabled={language === "de" ? true : false}
          type="button"
          onClick={() => {
            setLanguage("de");
          }}
        >
          DE
        </NavButton>
        <NavButton
          disabled={language === "en" ? true : false}
          type="button"
          onClick={() => {
            setLanguage("en");
          }}
        >
          EN
        </NavButton>
      </nav>
    </StyledHeader>
  );
}
