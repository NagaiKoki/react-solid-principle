import { VFC, FC } from "react";

type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = ({ title, children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

type TitleWithLinkProps = {
  title: string;
  href: string;
  buttonText: string;
};

export const TitleWithLink: VFC<TitleWithLinkProps> = ({
  title,
  href,
  buttonText,
}) => {
  return (
    <Title title={title}>
      <button>
        <a href={href}>{buttonText}</a>
      </button>
    </Title>
  );
};

type TitleWithButtonProps = {
  title: string;
  buttonText: string;
  onClick: () => void;
};

export const TitleWithButtonProps: VFC<TitleWithButtonProps> = ({
  title,
  buttonText,
  onClick,
}) => {
  return (
    <Title title={title}>
      <button onClick={onClick}>{buttonText}</button>
    </Title>
  );
};
