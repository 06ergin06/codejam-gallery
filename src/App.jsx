import Pictures from "./components/Pictures.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <>
      <Header />
      {/*Header componentini components/Header.jsx'den okuyabilirsiniz.*/}
      <Pictures />
      {/*Pictures componentini components/Pictures.jsx'den okuyabilirsiniz.*/}
    </>
  );
}

export default App;
