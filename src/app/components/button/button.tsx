import * as React from "react";
import { ButtonCustom } from "./button-styled";

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  type?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  name,
  type = "primary",
  disabled,
}: ButtonProps) => {

  return (
    <>
      <ButtonCustom typeButton={type} onClick={onClick} disabled={disabled}>
        {name}
      </ButtonCustom>
    </>
  );
};

export default Button;
