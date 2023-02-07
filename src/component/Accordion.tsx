import { useState } from "react";

type AccordionProps = {
	title: string;
	children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<h3>{title}</h3>
			<button onClick={() => setOpen(!open)}>{open ? "close" : "open"}</button>

			{open && <div>{children}</div>}
		</div>
	);
}
