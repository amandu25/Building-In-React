import { useEffect, useState } from "react";

function useDictionary(word) {
  const [Data, setData] = useState({});
  if (word) {
    useEffect(() => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error(error));
    }, [word]);
  }
  return Data;
}

export default useDictionary;
