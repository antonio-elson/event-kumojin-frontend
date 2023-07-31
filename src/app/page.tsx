import React from "react";
import { Content, HomeContent, HomeTitle } from "./page-styled";

export default function Home() {
  return (
    <Content>
      <HomeContent>
        <HomeTitle>{`Gestion d'événements`} </HomeTitle>
        <HomeTitle>{`イベント管理`} </HomeTitle>
      </HomeContent>
    </Content>
  );
}
