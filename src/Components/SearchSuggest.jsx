import useStore from "./useStore";
import { useEffect } from "react";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";

export default function SearchSuggest() {
  const fetchProductList = useStore((state) => state.fetchProductList);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  console.log(fetchedProductItems.data);

  return (
    <UnorderedList>
      {fetchedProductItems.data.map((item) => {
        return (
          <ListItem key={item._id}>
            <ListTag>{item.name.de}</ListTag>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
