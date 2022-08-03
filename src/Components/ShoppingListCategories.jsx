import ShoppingList from "./ShoppingList";
import useStore from "../hooks/useStore";
import { useEffect } from "react";
import StyledListItem from "./StyledListItem";
import StyledUnorderedList from "./StyledUnorderedList";

export default function ShoppingListCategories() {
  const categories = useStore((state) => state.categories);
  const addCategories = useStore((state) => state.addCategories);

  useEffect(() => {
    addCategories("https://fetch-me.vercel.app/api/shopping/categories");
  }, [addCategories]);

  return (
    <>
      <StyledUnorderedList>
        {categories.data.map((category) => {
          return (
            <StyledListItem key={category._id}>
              {category.name.de}
            </StyledListItem>
          );
        })}
      </StyledUnorderedList>
      <ShoppingList />
    </>
  );
}
