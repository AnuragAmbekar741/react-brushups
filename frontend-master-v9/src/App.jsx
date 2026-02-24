import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - order now</h1>
      <Pizza
        name="Peproni"
        description="pep, cheese, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="Hawaiin"
        description="ham, pineapple, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="Americano"
        description="fresh fries, cheese, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
