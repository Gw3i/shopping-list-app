import useStore from "../hooks/useStore";
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
  const language = useStore((state) => state.language);

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
                  createShoppingItems(item.name, item.category);
                  onInputValueReset();
                }}
              >
                {item.name[language]}
              </StyledListButton>
            </StyledListItem>
          );
        })
      ) : inputValue ? (
        <StyledParagraph>
          {language === "de" ? "Nichts gefunden" : "Nothing found"}
        </StyledParagraph>
      ) : (
        ""
      )}
    </StyledUnorderedList>
  );
}
