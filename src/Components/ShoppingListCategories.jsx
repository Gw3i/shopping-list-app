import ShoppingList from "./ShoppingList";
import useStore from "../hooks/useStore";
import { useEffect, useState } from "react";
import StyledListItem from "./StyledListItem";
import StyledUnorderedList from "./StyledUnorderedList";
import StyledCollabsedText from "./StyledCollabsedText";

export default function ShoppingListCategories() {
  const language = useStore((state) => state.language);
  const categories = useStore((state) => state.categories);
  const addCategories = useStore((state) => state.addCategories);
  const shoppingItems = useStore((state) => state.shoppingItems);
  const [isShown, setIsShown] = useState(true);

  console.log(isShown);

  useEffect(() => {
    addCategories("https://fetch-me.vercel.app/api/shopping/categories");
  }, [addCategories]);

  return (
    <>
      <StyledUnorderedList variant="category">
        {categories.data.map((category) => {
          return (
            <StyledListItem
              key={category._id}
              variant="category"
              arrow={isShown ? "toBottom" : "default"}
            >
              {
                <button onClick={() => setIsShown(!isShown)}>
                  {category.name[language]}
                </button>
              }
              <StyledCollabsedText display={isShown ? "shown" : "hidden"}>
                <p>Text to collapse</p>
                <ShoppingList categoryId={category._id} />
              </StyledCollabsedText>
              {/* if shoppingItem._id === category._id show shoppingItem  */}
            </StyledListItem>
          );
        })}
      </StyledUnorderedList>
    </>
  );
}
