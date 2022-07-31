import useStore from "./useStore";
import { useEffect } from "react";
import StyledUnorderedList from "./StyledUnorderedList";
import StyledListItem from "./StyledListItem";
import StyledListButton from "./StyledListButton";

export default function SearchSuggest({ fuzzyResults, onInputValueReset }) {
  const fetchProductList = useStore((state) => state.fetchProductList);
  const createShoppingItems = useStore((state) => state.createShoppingItems);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  return (
    <StyledUnorderedList>
      {fuzzyResults
        .filter((item) => {
          return fuzzyResults.length === 0 ? console.log(item) : fuzzyResults;
        })
        .map((item) => {
          return (
            <StyledListItem key={item._id}>
              <StyledListButton
                onClick={() => {
                  console.log(fuzzyResults);
                  createShoppingItems(item.name.de);
                  onInputValueReset();
                }}
              >
                {item.name.de}
              </StyledListButton>
            </StyledListItem>
          );
        })}
    </StyledUnorderedList>
  );
}
