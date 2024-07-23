import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import type {
	TailwindBackgroundColor,
	TailwindColor,
} from "../types/tailwind-color.js";
import type { TailWindThemedStyle } from "../types/tailwind-themed-style.js";
import { cn } from "../utils/cn.js";

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
	color,
	children,
	className,
	...rest
}) => (
	<span
		className={cn(
			"text-slate-800 dark:text-slate-100 inline-flex items-center rounded-full text-xs px-2.5 py-0.5 font-semibold",
			...badgeColorToBg[color],
			className,
		)}
		{...rest}
	>
		{children}
	</span>
);

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
	color: TailwindColor;
}

const badgeColorToBg = {
	slate: ["bg-slate-100", "dark:bg-slate-800"],
	gray: ["bg-gray-100", "dark:bg-gray-800"],
	zinc: ["bg-zinc-100", "dark:bg-zinc-800"],
	neutral: ["bg-neutral-100", "dark:bg-neutral-800"],
	stone: ["bg-stone-100", "dark:bg-stone-800"],
	red: ["bg-red-100", "dark:bg-red-800"],
	orange: ["bg-orange-100", "dark:bg-orange-800"],
	amber: ["bg-amber-100", "dark:bg-amber-800"],
	yellow: ["bg-yellow-100", "dark:bg-yellow-800"],
	lime: ["bg-lime-100", "dark:bg-lime-800"],
	green: ["bg-green-100", "dark:bg-green-800"],
	emerald: ["bg-emerald-100", "dark:bg-emerald-800"],
	teal: ["bg-teal-100", "dark:bg-teal-800"],
	cyan: ["bg-cyan-100", "dark:bg-cyan-800"],
	sky: ["bg-sky-100", "dark:bg-sky-800"],
	blue: ["bg-blue-100", "dark:bg-blue-800"],
	indigo: ["bg-indigo-100", "dark:bg-indigo-800"],
	violet: ["bg-violet-100", "dark:bg-violet-800"],
	purple: ["bg-purple-100", "dark:bg-purple-800"],
	fuchsia: ["bg-fuchsia-100", "dark:bg-fuchsia-800"],
	pink: ["bg-pink-100", "dark:bg-pink-800"],
	rose: ["bg-rose-100", "dark:bg-rose-800"],
} as const satisfies Record<
	TailwindColor,
	TailWindThemedStyle<TailwindBackgroundColor>
>;
