"use client";
import styled from "styled-components";

export interface ModalStyleProps {
    isActive: boolean;
}

export const Container = styled.div`
  margin: 0 20px;
`;

export const WrapperButton = styled.div`
  margin: 20px 0;
`;

export const Modal = styled.div<ModalStyleProps>`
  display: ${({isActive}) => (isActive ? "grid" : "none")};
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  align-content: center;
  justify-content: center;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  text-align: center;
`;

export const ModalContent = styled.div`
  padding: 12px;
  display: grid;
  border-radius: 8px;
  border-width: 1px;
  border-color: #e5e7eb;
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  flex: 1 1 150px;
  margin: 5px;

  @media (max-width: 425px) {
    .modalContent {
      width: 100%;
    }
  }
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 12px;
`;

export const ListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const Loader = styled.div`
 border: 16px solid #11cee7;
  border-top: 16px #1153d6 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
