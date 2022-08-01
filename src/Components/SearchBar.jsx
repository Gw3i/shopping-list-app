import StyledForm from "./StyledForm";
import StyledLabel from "./StyledLabel";
import StyledInput from "./StyledInput";
import { useState } from "react";
import useStore from "../hooks/useStore";
import SearchSuggest from "./SearchSuggest";
import { search } from "fast-fuzzy";

export default function SearchBar({ labelFor, type }) {
  const [inputValue, setInputValue] = useState("");
  const createShoppingItems = useStore((state) => state.createShoppingItems);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);
  const language = useStore((state) => state.language);

  function handleInputValueReset() {
    setInputValue("");
  }

  //////////// Fuzzy Search
  const fuzzyResults = search(inputValue, fetchedProductItems.data, {
    keySelector: (obj) => obj.name[language],
  });

  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          createShoppingItems(inputValue);
          setInputValue("");
        }}
      >
        <StyledLabel htmlFor={labelFor}>
          {language === "de"
            ? "Was möchtest du einkaufen?"
            : "What do you want to buy?"}
        </StyledLabel>
        <StyledInput
          name={labelFor}
          id={labelFor}
          type={type}
          placeholder={
            language === "de" ? "Tippe um zu suchen..." : "Type to search..."
          }
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </StyledForm>
      <SearchSuggest
        fuzzyResults={fuzzyResults}
        onInputValueReset={handleInputValueReset}
        inputValue={inputValue}
      />
    </>
  );
}
