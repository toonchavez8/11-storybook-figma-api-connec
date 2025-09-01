import Logo from "@/components/atomic/Logo";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta = {
	component: Logo,
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/pam5zzTCmgJOCFRVtTG0fD/conference-ticket-generator?node-id=93-1161&m=dev",
		},
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => <Logo />,
};
