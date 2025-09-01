import React from "react";
import clsx from "clsx";

export type TextComponentPreset =
	| "display"
	| "headline"
	| "title"
	| "subheadline"
	| "labelextrabold"
	| "label"
	| "body"
	| "caption";

interface TextComponentProps {
	text: string;
	preset?: TextComponentPreset;
	className?: string;
	as?: React.ElementType;
}

const presetStyles: Record<TextComponentPreset, string> = {
	display:
		"font-extrabold font-inconsolata text-[1.875rem] leading-[1.1] tracking-[-1px] md:text-[3.75rem]",
	headline:
		"font-bold font-inconsolata text-[1.5rem] leading-[1.1] tracking-[-1px] md:text-[2.5rem]",
	title:
		"font-bold font-inconsolata text-[1.375rem] leading-[1.1] tracking-[-1px] md:text-[1.875rem]",
	subheadline:
		"font-normal font-inconsolata text-[1.25rem] leading-[1.2] tracking-[-0.5px] md:text-[1.5rem] ",
	labelextrabold:
		"font-extrabold font-inconsolata text-[1.25rem] leading-[1.1] tracking-[-0.3px]",
	label:
		"font-medium font-inconsolata text-[1.25rem] leading-[1.1] tracking-[-0.5px]",
	body: "font-medium font-inconsolata text-[1.125rem] leading-[1.2] tracking-[0px] md:text-[0.875rem]",
	caption:
		"font-normal font-inconsolata text-[0.75rem] leading-[1.2] tracking-[-0.2px]",
};

export const TextComponent: React.FC<TextComponentProps> = ({
	text,
	preset = "display",
	className,
	as: Tag = "span",
}) => {
	return <Tag className={clsx(presetStyles[preset], className)}>{text}</Tag>;
};

export default TextComponent;
