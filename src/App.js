import GlobalStyle from "./GlobalStyle";
import Titel from "./Components/Titel";
import Main from "./Components/Main";
import ShoppingList from "./Components/ShoppingList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Titel>Einkaufsliste</Titel>
        <ShoppingList />
      </Main>
    </>
  );
}

export default App;
