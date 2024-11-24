import React from "react";

// import localFont from "../../fonts/local";
import { twMerge } from "tailwind-merge";

export const Paragraph = ({
  className,
  children,
}) => {
  return (
    <p
      className={twMerge(
        "text-sm lg:text-base font-normal text-secondary self-center" ,
        className
      )}
    >
      {children}
    </p>
  );
};
