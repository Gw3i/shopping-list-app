import create from "zustand";

const useStore = create((set) => {
  return {
    shoppingItems: { data: [] },
    fetchProductList: async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        set({ shoppingItems: data });
      } catch (error) {
        console.error(`Ups, fetchning went wrong: ${error}`);
      }
    },
    createShoppingItems: (name, value) => {
      set((state) => {
        return { 
          shoppingItems: [...state.shoppingItems, { name, id: { value } }],
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
