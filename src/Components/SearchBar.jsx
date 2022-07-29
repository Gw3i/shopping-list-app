import Form from "./Form";
import Label from "./Label";
import Input from "./Input";

export default function SearchBar({ labelFor, labelText, placeholder, type }) {
  return (
    <Form>
      <Label htmlFor={labelFor}>{labelText}</Label>
      <Input
        name={labelFor}
        id={labelFor}
        type={type}
        placeholder={placeholder}
      />
    </Form>
  );
}
