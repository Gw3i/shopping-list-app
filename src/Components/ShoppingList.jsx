import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";
import { useState } from "react";
import { items } from "../data";

export default function ShoppingList() {
  const [shoppingItem, setShoppingItem] = useState(items);

  return (
    <UnorderedList>
      {shoppingItem.map((item) => {
        console.log(item);
        return (
          <ListItem key={item._id}>
            <ListTag>{item.name.de}</ListTag>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
