import UnorderedList from "./StyledUnorderedList";
import StyledListItem from "./StyledListItem";
import StyledListButton from "./StyledListButton";
import useStore from "../hooks/useStore";

export default function ShoppingList({ categoryId }) {
  const shoppingItems = useStore((state) => state.shoppingItems);
  const deleteListItems = useStore((state) => state.deleteListItems);
  const language = useStore((state) => state.language);

  return (
    <UnorderedList>
      {shoppingItems
        .filter((item) => {
          return item.category._ref === categoryId;
        })
        .map((item) => {
          return (
            <StyledListItem key={item._id}>
              <StyledListButton
                onClick={() => {
                  deleteListItems(item._id);
                }}
              >
                {item.name[language]}
              </StyledListButton>
            </StyledListItem>
          );
        })}
    </UnorderedList>
  );
}
