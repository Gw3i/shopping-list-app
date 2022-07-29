import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import { useState } from "react";
import useStore from "./useStore";
import SearchSuggest from "./SearchSuggest";
import { search } from "fast-fuzzy";

export default function SearchBar({ labelFor, labelText, placeholder, type }) {
  const [inputValue, setInputValue] = useState("");
  const createShoppingItems = useStore((state) => state.createShoppingItems);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);

  //////////// Fuzzy Search

  const { search } = require("fast-fuzzy");

  function fuzzySearch(inputValue) {
    let fuzzyResult = search(inputValue, fetchedProductItems.data, {
      keySelector: (obj) => obj.name.de,
    });
    return fuzzyResult;
  }

  fuzzySearch(inputValue);
  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          createShoppingItems(inputValue);
          setInputValue("");
        }}
      >
        <Label htmlFor={labelFor}>{labelText}</Label>
        <Input
          name={labelFor}
          id={labelFor}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            fuzzySearch(inputValue);
          }}
        />
      </Form>
      <SearchSuggest inputValue={inputValue} />
    </>
  );
}
