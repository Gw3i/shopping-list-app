import ShoppingList from "./ShoppingList";
import useStore from "../hooks/useStore";
import { useEffect } from "react";
import StyledListItem from "./StyledListItem";
import StyledUnorderedList from "./StyledUnorderedList";

export default function ShoppingListCategories() {
  const language = useStore((state) => state.language);
  const categories = useStore((state) => state.categories);
  const addCategories = useStore((state) => state.addCategories);

  useEffect(() => {
    addCategories("https://fetch-me.vercel.app/api/shopping/categories");
  }, [addCategories]);

  return (
    <>
      <StyledUnorderedList variant="category">
        {categories.data.map((category) => {
          return (
            <StyledListItem variant="category" key={category._id}>
              {category.name[language]}
            </StyledListItem>
          );
        })}
      </StyledUnorderedList>
      <ShoppingList />
    </>
  );
}
