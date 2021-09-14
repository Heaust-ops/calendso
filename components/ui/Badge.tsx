import classNames from "@lib/classNames";
import React from "react";

export type BadgeProps = {
  variant: "default" | "success";
} & JSX.IntrinsicElements["span"];

export const Badge = function Badge(props: BadgeProps) {
  const { variant, className, ...passThroughProps } = props;

  return (
    <span
      {...passThroughProps}
      className={classNames(
        "font-bold px-2 py-0.5 inline-block",
        variant === "default" && "bg-yellow-100 text-yellow-800",
        variant === "success" && "bg-green-100 text-green-800",
        className
      )}>
      {props.children}
    </span>
  );
};

export default Badge;
