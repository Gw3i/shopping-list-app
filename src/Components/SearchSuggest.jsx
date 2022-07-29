import useStore from "./useStore";
import { useEffect } from "react";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";

export default function SearchSuggest({ inputValue }) {
  const fetchProductList = useStore((state) => state.fetchProductList);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);
  const createShoppingItems = useStore((state) => state.createShoppingItems);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  console.log(inputValue);
  return (
    <UnorderedList>
      {fetchedProductItems.data
        .filter((item) => {
          return inputValue.toLowerCase() === ""
            ? item
            : item.name.de.toLowerCase().includes(inputValue);
        })
        .map((item) => {
          return (
            <ListItem key={item._id}>
              <ListTag
                onClick={() => {
                  createShoppingItems(item.name.de);
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
