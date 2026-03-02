import { expect, vi, test } from "vitest";
import { renderHook } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "test-pizza-id",
  name: "test-pizza-name",
  category: "test-pizza-category",
  description: "test-pizza-desc",
  image: "/public/pizzas/calabrese.webp",
  size: {
    S: 12.25,
    M: 16.25,
    L: 20.25,
  },
};

test("give null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBe(null);
});
