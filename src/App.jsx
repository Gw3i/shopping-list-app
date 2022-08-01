import GlobalStyle from "./GlobalStyle";
import StyledMain from "./Components/StyledMain";
import ShoppingList from "./Components/ShoppingList";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <ShoppingList />
        <SearchBar
          labelFor="whatShopping"
          type="search"
        />
      </StyledMain>
    </>
  );
}

export default App;
