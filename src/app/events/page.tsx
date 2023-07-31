"use client";
import * as React from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import { WrapperDate, WrapperDateInput } from "../components/input/input-styled";
import {
  Container,
  Modal,
  ModalButton,
  ModalContent,
  WrapperButton,
} from "./events-styled";

export default function Events() {
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState("");
  const [startHour, setStartHour] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [endHour, setEndHour] = React.useState("");

  const save = React.useCallback(() => {
    console.log("Enregistrer");
  }, []);

  return (
    <Container>
      <WrapperButton>
        <Button
          onClick={() => setIsModal(!isModal)}
          type="primary"
          name="+ Créer événement"
        />
      </WrapperButton>
      <Modal isActive={isModal}>
        <ModalContent>
          <h2>Événement</h2>
          <Input
            type="text"
            name="Name"
            label="Event Name"
            placeholder="Ajouter un titre"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="Description"
            label="Description"
            placeholder="Ajouter une description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <WrapperDate>
            <p>{`Début de l'événement`}</p>
            <WrapperDateInput>
              <Input
                type="date"
                name="StartDate"
                width="150px"
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="time"
                name="StartHour"
                width="100px"
                onChange={(e) => setStartHour(e.target.value)}
              />
            </WrapperDateInput>
          </WrapperDate>
          <WrapperDate>
            <p>{`Fin de l'événement`}</p>
            <WrapperDateInput>
              <Input
                type="date"
                name="EndDate"
                width="150px"
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Input
                type="time"
                name="EndHour"
                width="100px"
                onChange={(e) => setEndHour(e.target.value)}
              />
            </WrapperDateInput>
          </WrapperDate>

          <ModalButton>
            <Button type="primary" onClick={save} name="Enregistrer" />
            <Button
              onClick={() => setIsModal(!isModal)}
              name="Annuler"
              type="secondary"
            />
          </ModalButton>
        </ModalContent>
      </Modal>
    </Container>
  );
}
