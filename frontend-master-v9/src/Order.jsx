import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  const [pizzaType, setpizzaType] = useState("pepproni");
  const [pizzaSize, setPizzaSize] = useState("M");
  return (
    <div>
      <h2>Create order page</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setpizzaType(e.target.value)}
            >
              <option value="pepproni">The pepproni pizza</option>
              <option value="hawaiian">The hawaii pizza</option>
              <option value="big-meat">The big meat pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza size</label>
            <div onChange={(e) => setPizzaSize(e.target.value)}>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  value="S"
                  name="pizza-size"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "M"}
                  value="M"
                  name="pizza-size"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "L"}
                  value="L"
                  name="pizza-size"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to cart</button>
          <div>
            <Pizza
              name="Peppronii"
              desc="cheese"
              image="/public/pizzas/pepperoni.webp"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
