import dark from "@/assets/dark.png";
import light from "@/assets/light.png";
import clsx from "clsx";
import type { FC } from "react";
import styles from "./digital-garden.module.css";

export const DigitalGardenPage: FC = () => (
  <div className="relative h-dvh w-dvw">
    <img
      src={dark}
      alt=""
      className="absolute top-0 left-0 h-full w-full"
    />
    <img
      src={light}
      alt=""
      className={clsx(
        styles.light,
        "light absolute top-0 left-0 h-full w-full",
      )}
    />
  </div>
);
