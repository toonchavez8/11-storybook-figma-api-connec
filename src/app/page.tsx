import TextComponent from "@/components/atomic/TextComponent;";
import React from "react";

const page = () => {
	return (
		<main>
			<div className="flex flex-col gap-5 items-center justify-center mt-10">
				<TextComponent
					text="Your Journey to Coding Conf 2025 Starts Here!"
					preset="display"
					as="h1"
					className="text-white max-w-4xl mx-auto text-center border border-red-500 "
				/>
				<TextComponent
					text="Secure your spot at next year’s biggest coding conference."
					preset="subheadline"
					as="h2"
					className="text-white max-w-4xl mx-auto text-center border border-red-500 "
				/>
			</div>
		</main>
	);
};

export default page;
