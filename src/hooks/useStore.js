import { nanoid } from "nanoid";
import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  //persist(
  (set) => {
    return {
      fetchedProductItems: { data: [] },
      fetchProductList: async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          set({ fetchedProductItems: data });
        } catch (error) {
          console.error(`Ups, fetchning went wrong: ${error}`);
        }
      },
      categories: { data: [] },
      addCategories: async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          set({ categories: data });
        } catch (error) {
          console.error(`Ups, fetchning went wrong: ${error}`);
        }
      },
      shoppingItems: [],
      createShoppingItems: (name) => {
        set((state) => {
          return {
            shoppingItems: [...state.shoppingItems, { name, _id: nanoid() }],
          };
        });
      },
      deleteListItems: (id) => {
        set((state) => {
          return {
            shoppingItems: state.shoppingItems.filter(
              (listItem) => listItem._id !== id
            ),
          };
        });
      },
      language: "de",
      setLanguage: (lang) => {
        set({ language: lang });
      },
    };
  }
  //,{ name: "shoppingList" }
  //)
);

export default useStore;
