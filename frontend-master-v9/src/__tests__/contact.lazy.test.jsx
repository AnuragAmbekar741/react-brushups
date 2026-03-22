import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMoch from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();

const fetchMocker = createFetchMoch(vi);
fetchMocker.enableMocks();

test("can submit contact form", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageTextarea = screen.getByPlaceholderText("Message");

  const testData = {
    name: "Anurag",
    email: "Anurag@gmail.com",
    message: "We all who the fuck this goat is!",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  messageTextarea.value = testData.message;

  const btn = screen.getByRole("button");
  btn.click();
  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.innerText).toContain("Submitted");
  const request = fetchMocker.requests();
  expect(request.length).toBe(1);
  expect(request[0].url).toBe("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(testData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
