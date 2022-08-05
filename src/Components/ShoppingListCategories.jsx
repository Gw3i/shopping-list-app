import ShoppingList from "./ShoppingList";
import useStore from "../hooks/useStore";
import { useEffect, useState } from "react";
import StyledListItem from "./StyledListItem";
import StyledUnorderedList from "./StyledUnorderedList";
import StyledCollabsedContainer from "./StyledCollabsedContainer";
import StyledCategoryButton from "./StyledCategoryButton";

export default function ShoppingListCategories() {
  const language = useStore((state) => state.language);
  const categories = useStore((state) => state.categories);
  const addCategories = useStore((state) => state.addCategories);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    addCategories("https://fetch-me.vercel.app/api/shopping/categories");
  }, [addCategories]);

  function handleCollapse(id) {
    setIsShown(() => ({ ...isShown, [id]: !isShown[id] }));
  }

  return (
    <>
      <StyledUnorderedList variant="category">
        {categories.data.map((category) => {
          return (
            <StyledListItem key={category._id} variant="category">
              {
                <StyledCategoryButton
                  onClick={() => handleCollapse(category._id)}
                  arrow={isShown[category._id] ? "default" : "toBottom"}
                >
                  {category.name[language]}
                </StyledCategoryButton>
              }
              <StyledCollabsedContainer
                display={isShown[category._id] ? "hidden" : "show"}
              >
                <ShoppingList categoryId={category._id} />
              </StyledCollabsedContainer>
            </StyledListItem>
          );
        })}
      </StyledUnorderedList>
    </>
  );
}
