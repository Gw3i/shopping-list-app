import NavButton from "./NavButton";
import StyledHeader from "./StyledHeader";
import StyledTitel from "./StyledTitel";
import useStore from "../hooks/useStore";
import { useState } from "react";

export default function Header() {
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);
  const [disabled, setDisabled] = useState(false);

  return (
    <StyledHeader>
      <StyledTitel>
        {language === "de" ? "Einkaufsliste" : "Shopping list"}
      </StyledTitel>
      <nav>
        <NavButton
          //disabled={disabled}
          type="button"
          onClick={() => {
            setLanguage("de");
            //setDisabled(true);
          }}
        >
          DE
        </NavButton>
        <NavButton
          //disabled={disabled}
          type="button"
          onClick={() => {
            setLanguage("en");
            //setDisabled(false);
          }}
        >
          EN
        </NavButton>
      </nav>
    </StyledHeader>
  );
}
