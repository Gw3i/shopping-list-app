import { nanoid } from "nanoid";
import create from "zustand";
import { items } from "../data";

const useStore = create((set) => {
  return {
    shoppingItems: items,
    createShoppingItems: (name) => {
      set((state) => {
        return {
          shoppingItems: [
            ...state.shoppingItems,
            { name: { de: name }, _id: nanoid() },
          ],
        };
      });
    },
    deleteListItems: (id) => {
      set((state) => {
        console.log(state.shoppingItems);
        return {
          shoppingItems: state.shoppingItems.filter(
            (listItem) => listItem._id !== id
          ),
        };
      });
    },
  };
});

export default useStore;
