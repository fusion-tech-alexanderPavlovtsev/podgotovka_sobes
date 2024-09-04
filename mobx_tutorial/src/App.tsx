import { Wrapper } from "./components/wrapper";
import { RootStoreContext } from "./root-store-context";
import RootStore from "./store/root-store";

function App() {
  // return <Counter />;
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="App">
        <Wrapper />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
