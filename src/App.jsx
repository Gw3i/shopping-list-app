import GlobalStyle from "./GlobalStyle";
import StyledMain from "./Components/StyledMain";
import ShoppingList from "./Components/ShoppingList";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import ShoppingListCategories from "./Components/ShoppingListCategories";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <ShoppingListCategories />
        <SearchBar labelFor="whatShopping" type="search" />
      </StyledMain>
    </>
  );
}

export default App;
