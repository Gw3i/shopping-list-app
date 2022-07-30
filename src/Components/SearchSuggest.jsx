import useStore from "./useStore";
import { useEffect } from "react";
import UnorderedList from "./StyledUnorderedList";
import StyledListItem from "./StyledListItem";
import StyledListButton from "./StyledListButton";

export default function SearchSuggest({ inputValue, fuzzyResults }) {
  const fetchProductList = useStore((state) => state.fetchProductList);
  const fetchedProductItems = useStore((state) => state.fetchedProductItems);
  const createShoppingItems = useStore((state) => state.createShoppingItems);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  return (
    <UnorderedList>
      {/* {fetchedProductItems.data
        .filter((item) => {
          return inputValue.toLowerCase() === ""
            ? item
            : item.name.de.toLowerCase().includes(inputValue);
        }) */}

      {fuzzyResults.map((item) => {
        return (
          <StyledListItem key={item._id}>
            <StyledListButton
              onClick={() => {
                createShoppingItems(item.name.de);
              }}
            >
              {item.name.de}
            </StyledListButton>
          </StyledListItem>
        );
      })}
    </UnorderedList>
  );
}
