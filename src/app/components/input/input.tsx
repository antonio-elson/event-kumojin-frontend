import * as React from "react";
import { ContentInput, InputForm } from "./input-styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({ label, name, width = null, ...rest }) => (
  <ContentInput>
    <label style={{ textAlign: "start" }} htmlFor={name}>
      {label}
    </label>
    <InputForm id={name} width={width} {...rest}></InputForm>
  </ContentInput>
);

export default Input;