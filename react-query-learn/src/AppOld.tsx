import { useState } from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCoins() {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      const { data } = await fetch(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=10"
      );
      setCoins(data.coins);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!coins) {
    return <h3>No data</h3>;
  }

  return <div style={{ marginTop: 30, maxWidth: 600 }}>{coins}</div>;
}

export default App;
