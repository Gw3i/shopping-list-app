import useStore from "./useStore";
import { useEffect } from "react";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";

export default function SearchSuggest() {
  const fetchProductList = useStore((state) => state.fetchProductList);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);
  const createShoppingItems = useStore((state) => state.createShoppingItems);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  return (
    <UnorderedList>
      {fetchedProductItems.data.map((item) => {
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
