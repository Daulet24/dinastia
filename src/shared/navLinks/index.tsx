import React from "react";

interface INavLinksProps {
  href?: string;
  text?: string;
  className?: string;
}

export const INavLinks = ({ href, text, className }: INavLinksProps) => {
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};
