"use client";
import * as React from "react";
import Button from "../components/button/button";
import Card, { EventsRequest } from "../components/card/card";
import Input from "../components/input/input";
import {
  WrapperDate,
  WrapperDateInput,
} from "../components/input/input-styled";
import { getUrlApi } from "../services/api";
import {
  Container,
  ListCard,
  Loader,
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
  const [events, setEvents] = React.useState<EventsRequest>([]);
  const [isLoaging, setIsLoading] = React.useState<boolean>(false);

  const formatEventDate = React.useCallback((date: string) => {
    const dateTime = new Date(date);
    const dateTimeFormat = new Intl.DateTimeFormat("fr-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(dateTime);

    return dateTimeFormat;
  }, []);

  const formatTimeZone = React.useCallback((date: string, hour: string) => {
    const dateNow = new Date();
    const pad = (num: number) => (num < 10 ? "0" : "") + num;
    const tzo = dateNow.getTimezoneOffset();
    const dif = tzo >= 0 ? "-" : "+";
    const tzHour = pad(Math.floor(Math.abs(tzo) / 60));
    const tzMinute = pad(Math.abs(tzo) % 60);
    const timeZone = `${dif}${tzHour}:${tzMinute}`;
    const formatedTimeZone = `${date}T${hour}:00${timeZone}`;

    return formatedTimeZone;
  }, []);

  const getListEvents = React.useCallback(() => {
    setIsLoading(true);
    setIsModal(true);
    getUrlApi
      .get("/events")
      .then((response) => {
        setEvents([...response.data.content]);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
        setIsModal(false);
      });
  }, []);

  React.useEffect(() => getListEvents(), [getListEvents]);

  const clearFields = React.useCallback(() => {
    setName("");
    setDescription("");
    setStartDate("");
    setStartHour("");
    setEndDate("");
    setEndHour("");
  }, []);

  const cancel = React.useCallback(() => {
    setIsModal(!isModal);
    clearFields();
  }, [clearFields, isModal]);

  const save = React.useCallback(() => {
    const params = {
      name: name,
      description: description,
      startDate: formatTimeZone(startDate, startHour),
      endDate: formatTimeZone(endDate, endHour),
    };

    setIsLoading(true);
    getUrlApi
      .post("/events", params)
      .then(getListEvents)
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
        setIsModal(!isModal);
      });
    clearFields();
  }, [
    clearFields,
    description,
    endDate,
    endHour,
    formatTimeZone,
    getListEvents,
    isModal,
    name,
    startDate,
    startHour,
  ]);

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
        {isLoaging ? (
          <Loader />
        ) : (
          <ModalContent>
            <h2>Événement</h2>
            <Input
              type="text"
              name="Name"
              label="Event Name"
              placeholder="Ajouter un titre"
              maxLength={32}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              name="Description"
              label="Description"
              placeholder="Ajouter une description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <WrapperDate>
              <p>{`Début de l'événement`}</p>
              <WrapperDateInput>
                <Input
                  type="date"
                  name="StartDate"
                  max={endDate}
                  value={startDate}
                  width="150px"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                  type="time"
                  name="StartHour"
                  value={startHour}
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
                  min={startDate}
                  value={endDate}
                  width="150px"
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <Input
                  type="time"
                  name="EndHour"
                  value={endHour}
                  width="100px"
                  onChange={(e) => setEndHour(e.target.value)}
                />
              </WrapperDateInput>
            </WrapperDate>

            <ModalButton>
              <Button type="primary" onClick={save} name="Enregistrer" />
              <Button onClick={cancel} name="Annuler" type="secondary" />
            </ModalButton>
          </ModalContent>
        )}
      </Modal>
      <ListCard>
        {events.map(({ name, description, startDate, endDate }, i) => (
          <Card
            key={i}
            description={description}
            name={name}
            startDate={formatEventDate(startDate)}
            endDate={formatEventDate(endDate)}
          />
        ))}
      </ListCard>
    </Container>
  );
}
