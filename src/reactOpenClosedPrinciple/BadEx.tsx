import React, { VFC } from "react";

type Props = {
  title: string;
  type: "default" | "withLinkButton" | "withNormalButton";
  href?: string;
  buttonText?: string;
  onClick?: () => void;
};

export const Title: VFC<Props> = ({
  title,
  type,
  href,
  buttonText,
  onClick,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{title}</h1>
      {type === "withLinkButton" && (
        <button onClick={onClick}>
          <a href={href}>{buttonText}</a>
        </button>
      )}
      {type === "withNormalButton" && (
        <button onClick={onClick}>{buttonText}</button>
      )}
    </div>
  );
};