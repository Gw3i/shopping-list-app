import GlobalStyle from "./GlobalStyle";
import Titel from "./Components/Titel";
import Main from "./Components/Main";
import ShoppingList from "./Components/ShoppingList";
import SearchBar from "./Components/SearchBar";
import SearchSuggest from "./Components/SearchSuggest";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Titel>Einkaufsliste</Titel>
        <ShoppingList />
        <SearchBar
          labelFor="whatShopping"
          labelText="Was willst du einkaufen?"
          placeholder="Tippe um zu suchen..."
          type="text"
        />
      </Main>
    </>
  );
}

export default App;
