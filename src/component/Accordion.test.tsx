import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

/* describe("Accordion", () => {
	test("should add two numbers", () => {
		expect(1 + 1).toBe(5);
	});
	test("shouldfdsafsa add two numbers", () => {
		expect(1 + 1).toBe(2);
	});
}); */
describe("Accordion", () => {
	beforeEach(() => {
		render(
			<Accordion title="hello">
				<h3>My title</h3>
				<p>some content</p>
			</Accordion>
		);
	});

	test("should show the accordion component", () => {
		expect(screen.getByText("hello")).toBeDefined();
	});
	test("should not show the content at the start", () => {
		expect(screen.queryByText(/content/i)).toBeNull();
	});
	test("should show the content when title is clicked", () => {
		const button = screen.getByText(/open/i);
		fireEvent.click(button);
		expect(screen.queryByText(/content/i)).toBeDefined();
	});
	test("should hide the content when title is clicked", () => {
		const button = screen.getByText(/open/i);
		/* fireEvent.doubleClick(button); */
		fireEvent.click(button);
		fireEvent.click(button);
		expect(screen.queryByText(/content/i)).toBeNull();
	});
});
