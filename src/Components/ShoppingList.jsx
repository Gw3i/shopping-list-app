import UnorderedList from "./StyledUnorderedList";
import StyledListItem from "./StyledListItem";
import StyledListButton from "./StyledListButton";
import useStore from "../hooks/useStore";

export default function ShoppingList() {
  const shoppingItems = useStore((state) => state.shoppingItems);
  const deleteListItems = useStore((state) => state.deleteListItems);
  const language = useStore((state) => state.language);

  return (
    <UnorderedList>
      {shoppingItems.map((item) => {
        console.log(item.name[language]);
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
