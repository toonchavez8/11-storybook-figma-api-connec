import { Button } from "@/components/ui/button";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
	buttonText: string;
};

const meta: Meta<StoryProps> = {
	component: Button,
	argTypes: {
		variant: {
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
			control: {
				type: "select",
			},
		},
		size: {
			options: ["default", "sm", "lg", "icon"],
			control: {
				type: "select",
			},
		},
	},
	args: {
		onClick: fn(),
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
	args: {
		buttonText: "test",
		variant: "default",
		size: "default",
	},
	render: ({ buttonText, variant, size, ...args }) => {
		return (
			<Button variant={variant} size={size} {...args}>
				{buttonText}
			</Button>
		);
	},
};
