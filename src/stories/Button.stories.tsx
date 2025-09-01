import { Button } from "@/components/ui/button";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
	buttonText: string;
};

console.log(
	"NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN:",
	process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
);
const meta: Meta<StoryProps> = {
	component: Button,
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/pam5zzTCmgJOCFRVtTG0fD/conference-ticket-generator?node-id=94-1246&https://www.figma.com/design/pam5zzTCmgJOCFRVtTG0fD/conference-ticket-generator?node-id=94-1246&m=devt=oWMbkgotZp83QRNv-1",
			accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
		},
	},
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
