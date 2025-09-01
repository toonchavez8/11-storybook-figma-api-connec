import {
	TextComponent,
	TextComponentPreset,
} from "@/components/atomic/TextComponent;";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

interface StoryProps {
	text: string;
	preset: TextComponentPreset;
	as?: React.ElementType;
}

const meta: Meta<StoryProps> = {
	component: TextComponent,
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/pam5zzTCmgJOCFRVtTG0fD/conference-ticket-generator?node-id=93-444&m=devhttps://www.figma.com/design/pam5zzTCmgJOCFRVtTG0fD/conference-ticket-generator?node-id=93-444&m=dev",
			accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
		},
	},
	argTypes: {
		preset: {
			options: [
				"display",
				"headline",
				"title",
				"subheadline",
				"label-extrabold",
				"label",
				"body",
				"caption",
			],
			control: { type: "select" },
		},
		as: {
			options: ["h1", "h2", "h3", "h4", "p", "span", "label", "sub"],
			control: { type: "select" },
		},
	},
	args: {
		text: "The quick brown fox jumps over the lazy dog.",
		preset: "display",
		as: "h1",
	},
	decorators: [
		(Story) => (
			<div style={{ background: "#fff", minHeight: "100vh" }}>
				<Story />
			</div>
		),
	],
};

export default meta;

export const Playground: StoryObj<StoryProps> = {
	render: ({ text, preset, as }) => (
		<TextComponent text={text} preset={preset} as={as} />
	),
};
