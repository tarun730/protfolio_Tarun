import React from "react";

// import localFont from ".//../../fonts/local";
import { twMerge } from "tailwind-merge";


export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}) => {
  return (
    <Tag
      className={twMerge(
        // CalSans.className,
        "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </Tag>
  );
};
