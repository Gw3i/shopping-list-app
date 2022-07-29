import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import { useState } from "react";
import useStore from "./useStore";
import SearchSuggest from "./SearchSuggest";

export default function SearchBar({ labelFor, labelText, placeholder, type }) {
  const [inputValue, setInputValue] = useState("");

  const createShoppingItems = useStore((state) => state.createShoppingItems);
  console.log(inputValue);
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
          }}
        />
      </Form>
      <SearchSuggest inputValue={inputValue} />
    </>
  );
}
