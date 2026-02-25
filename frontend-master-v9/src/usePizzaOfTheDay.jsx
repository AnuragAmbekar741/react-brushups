import { useEffect, useState } from "react";

export const usePizzaOfTheDay = () => {
  const [potd, setpotd] = useState(null);
  useEffect(() => {
    async function getPizzaOfTheDay() {
      const resp = await fetch("/api/pizza-of-the-day");
      const respJson = await resp.json();
      setpotd(respJson);
    }
    getPizzaOfTheDay();
  }, []);

  return potd;
};
