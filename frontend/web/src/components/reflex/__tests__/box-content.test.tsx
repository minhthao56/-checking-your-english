import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import BoxContent from "../box-content";

test("renders without crashing", () => {
  const { container } = render(<BoxContent />);
  expect(container.firstChild).toBeDefined();
});

test("displays its children", () => {
  const { getByText } = render(<BoxContent>Test Child</BoxContent>);
  expect(getByText("Test Child")).toBeDefined();
});
