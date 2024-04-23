import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Home component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});
