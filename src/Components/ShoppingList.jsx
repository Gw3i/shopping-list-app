import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";
import useStore from "./useStore";
import { useEffect } from "react";

export default function ShoppingList() {
  // const [shoppingItems_, setShoppingItems_] = useState(items);
  const shoppingItems = useStore((state) => state.shoppingItems);
  const deleteListItems = useStore((state) => state.deleteListItems);
  const fetchProductList = useStore((state) => state.fetchProductList);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  console.log(shoppingItems.data);
  return (
    <UnorderedList>
      {shoppingItems.data.map((item) => {
        return (
          <ListItem key={item._id}>
            <ListTag
              onClick={() => {
                console.log(item._id);
                deleteListItems(item._id);
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
