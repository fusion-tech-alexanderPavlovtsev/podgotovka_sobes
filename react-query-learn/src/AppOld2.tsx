import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const {
    data: coins,
    isLoading,
    isError,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
  } = useQuery({ queryKey: ["coins"] }, fetchCoins);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!coins) {
    return <h3>No data</h3>;
  }

  return (
    <div style={{ marginTop: 30, maxWidth: 600 }}>
      {coins?.map((c: unknown) => {
        return <span key={Math.random()}>{JSON.stringify(c)}</span>;
      })}
    </div>
  );
}

export default App;
