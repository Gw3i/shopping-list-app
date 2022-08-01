import useStore from "./useStore";
import { useEffect } from "react";
import StyledUnorderedList from "./StyledUnorderedList";
import StyledListItem from "./StyledListItem";
import StyledListButton from "./StyledListButton";
import StyledParagraph from "./StyledParagraph";

export default function SearchSuggest({
  fuzzyResults,
  onInputValueReset,
  inputValue,
}) {
  const fetchProductList = useStore((state) => state.fetchProductList);
  const createShoppingItems = useStore((state) => state.createShoppingItems);

  useEffect(() => {
    fetchProductList("https://fetch-me.vercel.app/api/shopping/items");
  }, [fetchProductList]);

  return (
    <StyledUnorderedList>
      {fuzzyResults.length ? (
        fuzzyResults.map((item) => {
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
        })
      ) : inputValue ? (
        <StyledParagraph>Nichts gefunden</StyledParagraph>
      ) : (
        ""
      )}
    </StyledUnorderedList>
  );
}
