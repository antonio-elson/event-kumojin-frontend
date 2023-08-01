"use client";
import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

export interface ButtonStyleProps {
  typeButton: string;
}

export const ButtonCustom = styled.button<ButtonStyleProps>`
  ${({ typeButton }) => css`
    background-color: ${typeButton === "primary" ? "#180e8d" : "transparent"};
    border: 1px solid #180e8d;
    border-radius: 23px;
    box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;
    box-sizing: border-box;
    color: ${typeButton === "primary" ? "#fff" : "#180e8d"};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 16px;
    position: relative;
    text-decoration: none;
    transition: all 250ms;

    &:hover {
      cursor: pointer;
      background-color: ${typeButton === "primary" ? "#180e8d" : "transparent"};
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      transform: translateY(-1px);
    }

    &:focus {
      color: #2a14be;
      border: 1px solid #2a14be;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }

    &:active(:disabled) {
      box-shadow: none;
      transform: translateY(2px);
    }

  `}
`;
