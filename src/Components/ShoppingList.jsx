import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import ListTag from "./ListTag";
import useStore from "./useStore";

export default function ShoppingList() {
  const shoppingItems = useStore((state) => state.shoppingItems);
  const deleteListItems = useStore((state) => state.deleteListItems);

  return (
    <UnorderedList>
      {shoppingItems.map((item) => {
        return (
          <ListItem key={item._id}>
            <ListTag
              onClick={() => {
                console.log(item._id);
                deleteListItems(item._id);
              }}
            >
              {item.name.de}
            </ListTag>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
