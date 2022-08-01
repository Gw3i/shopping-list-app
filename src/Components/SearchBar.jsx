import StyledForm from "./StyledForm";
import StyledLabel from "./StyledLabel";
import StyledInput from "./StyledInput";
import { useState } from "react";
import useStore from "../hooks/useStore";
import SearchSuggest from "./SearchSuggest";
import { search } from "fast-fuzzy";

export default function SearchBar({ labelFor, labelText, placeholder, type }) {
  const [inputValue, setInputValue] = useState("");
  const createShoppingItems = useStore((state) => state.createShoppingItems);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);

  function handleInputValueReset() {
    setInputValue("");
  }


  //////////// Fuzzy Search
  const fuzzyResults = search(inputValue, fetchedProductItems.data, {
    keySelector: (obj) => obj.name.de,
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
        <StyledLabel htmlFor={labelFor}>{labelText}</StyledLabel>
        <StyledInput
          name={labelFor}
          id={labelFor}
          type={type}
          placeholder={placeholder}
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
