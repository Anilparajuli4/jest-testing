import { render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter display correct initial count", () => {
    const { getByTestId } = render(<Counter value={0} />);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual(0);
  });
});
