import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - order now</h1>
      <Pizza name="Peproni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiin" description="ham, pineapple, n stuff" />
      <Pizza name="Americano" description="fresh fries, cheese, n stuff" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
