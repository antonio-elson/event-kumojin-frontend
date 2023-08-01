import Image from "next/image";
import React from "react";
import ImageHome from "./assets/events-time.svg";
import { Content, HomeContent, HomeTitle } from "./page-styled";

export default function Home() {
  return (
    <Content>
      <HomeContent>
        <HomeTitle>{`Gestion d'événements`} </HomeTitle>
        <HomeTitle>{`イベント管理`} </HomeTitle>
        <div>
          <Image
            style={{
              width: "100%",
              height: "400px",
            }}
            priority
            src={ImageHome}
            alt="Icon home"
          />
        </div>
      </HomeContent>
    </Content>
  );
}
