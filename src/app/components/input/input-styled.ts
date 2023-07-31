"use client";
import styled from "styled-components";

export interface InputStyleProps {
  width?: string | null;
}

export const ContentInput = styled.div`
  display: grid;
  place-items: initial;
`;

export const InputForm = styled.input<InputStyleProps>`
  padding: 2px;
  height: 36px;
  display: grid;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  background: transparent;
  color: #979ba2;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  font-size: 16px;
  margin-bottom: 8px;
  width: ${({ width }) => width ?? "auto"};

  &:hover,
  &:active {
    border: 1px solid #13aace;
    color: #13aace;
  }

  .inputForm:focus-visible {
    outline-color: #13aace;
  }

  .inputForm::-webkit-datetime-edit {
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
  }
  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-hour-field,
  &::-webkit-datetime-edit-minute-field {
    color: #979ba2;
  }
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    margin-top: -32px;
    margin-left: auto;
  }

  &:hover::-webkit-datetime-edit-text,
  &:active::-webkit-datetime-edit-text,
  &:hover::-webkit-datetime-edit-day-field,
  &:active::-webkit-datetime-edit-day-field,
  &:hover::-webkit-datetime-edit-month-field,
  &:active::-webkit-datetime-edit-month-field,
  &:hover::-webkit-datetime-edit-year-field,
  &:active::-webkit-datetime-edit-year-field,
  &:hover::-webkit-datetime-edit-hour-field,
  &:active::-webkit-datetime-edit-hour-field,
  &:hover::-webkit-datetime-edit-minute-field,
  &:active::-webkit-datetime-edit-minute-field {
    color: #13aace;
  }
`;

export const WrapperDate = styled.div`
  display: grid;
  place-items: start;
`;

export const WrapperDateInput = styled.div`
  display: flex;
  gap: 12px;
`;
