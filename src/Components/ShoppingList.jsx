import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";
import { useState } from "react";
import { items } from "../data";

export default function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState(items);

  return (
    <UnorderedList>
      {shoppingItems.map((item) => {
        console.log(item);
        return (
          <ListItem key={item._id}>
            <ListTag
              onClick={() => {
                setShoppingItems(
                  shoppingItems.filter((item_) => item_._id !== item._id)
                );
              }}
            >
              {item.name.de}
            </ListTag>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
