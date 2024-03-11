import { useEffect, useState } from "react";

// create your App component here
function App() {
  const [randomDog, setRandomDog] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchDog() {
    setIsLoading(true);
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setRandomDog(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={randomDog.message} alt="A Random Dog" />
      )}
    </>
  );
}

export default App;
