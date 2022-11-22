import { render } from "@testing-library/react";
import App from "../App";

describe("testing app file", () => {
  test("app is rendering", () => {
    render(<App />);
  });
});
