import UnorderedList from "./StyledUnorderedList";
import StyledListItem from "./StyledListItem";
import StyledListButton from "./StyledListButton";
import useStore from "../hooks/useStore";

export default function ShoppingList() {
  const shoppingItems = useStore((state) => state.shoppingItems);
  const deleteListItems = useStore((state) => state.deleteListItems);
  const language = useStore((state) => state.language);

  console.log(shoppingItems);
  return (
    <UnorderedList>
      {shoppingItems.map((item) => {
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
