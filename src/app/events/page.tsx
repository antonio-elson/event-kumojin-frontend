"use client";
import * as React from "react";
import Button from "../components/button/button";
import { Container, WrapperButton } from "./events-styled";

export default function Events() {
  const [isModal, setIsModal] = React.useState<boolean>(false);

  return (
    <Container>
      <WrapperButton>
        <Button
          onClick={() => setIsModal(!isModal)}
          type="primary"
          name="+ Créer événement"
        />
      </WrapperButton>
    </Container>
  );
}
