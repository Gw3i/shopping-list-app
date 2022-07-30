import GlobalStyle from "./GlobalStyle";
import Titel from "./Components/StyledTitel";
import StyledMain from "./Components/StyledMain";
import ShoppingList from "./Components/ShoppingList";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Titel>Einkaufsliste</Titel>
        <ShoppingList />
        <SearchBar
          labelFor="whatShopping"
          labelText="Was willst du einkaufen?"
          placeholder="Tippe um zu suchen..."
          type="search"
        />
      </StyledMain>
    </>
  );
}

export default App;
