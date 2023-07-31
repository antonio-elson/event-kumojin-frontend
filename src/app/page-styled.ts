"use client";
import styled from "styled-components";

export const LinkHeader = styled.a`
  color: #180e8d;
  margin-left: auto;
  text-decoration: none;
`;

export const NavHeader = styled.nav`
  background: #fff;
  padding: 22px;
  display: flex;

  @media (max-width: 768px) {
    background: #fff;
    padding: 22px;
    display: grid;
  }
`;

export const LinkNav = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10;
  font-size: 24;
  font-weight: 600;
`;

export const Main = styled.main`
  display: grid;
  height: 80vh;
  width: 100vw;
  flex-direction: column;
  color: #180e8d;
`;

export const Menu = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: center;
  margin-left: auto;
  font-weight: 600;
  gap: 24px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Footer = styled.footer`
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: auto;
`;

export const ContentFooter = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: center;

  p {
    color: #c6c2fa;
  }
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
`;

export const HomeContent = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

export const HomeTitle = styled.p`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`;
