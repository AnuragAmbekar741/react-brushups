import { useState, useEffect } from "react";
import Pizza from "./Pizza";

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setpizzaType] = useState("pepproni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  const intl = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes?.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza?.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const resp = await fetch("/api/pizzas");
    const respJson = await resp.json();
    console.log(respJson);
    setPizzaTypes(respJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

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
              {pizzaTypes &&
                pizzaTypes?.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  value="S"
                  name="pizza-size"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
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
                  onChange={(e) => setPizzaSize(e.target.value)}
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
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to cart</button>
        </div>
        {loading ? (
          <h3>LOADING …</h3>
        ) : (
          <>
            {selectedPizza && (
              <div className="order-pizza">
                <Pizza
                  name={selectedPizza?.name}
                  description={selectedPizza?.description}
                  image={selectedPizza?.image}
                />
                <p>{price}</p>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
}
