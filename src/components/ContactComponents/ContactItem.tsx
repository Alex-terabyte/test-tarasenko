import { Button } from "antd";
import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedselector } from "../../hooks/useTypedSelector";
import { IContact } from "../../models/IContact";

interface ContactProps {
  contacts: IContact;
}

const ContactItem: FC<ContactProps> = (props) => {
  const { contacts } = useTypedselector((state) => state.contacts);
  const { deleteContact } = useActions();

  // const deleteContacts = () => {
  //   deleteContact(props.contacts.id);
  // };

  return (
    <div className="contact">
      <div className="contact__content">
        <h3>Имя: {props.contacts.name}</h3>
        <h4>Номер телефона: {props.contacts.phone}</h4>
        <h4>Электронная почта: {props.contacts.email}</h4>
        <h4>Сайт: {props.contacts.website}</h4>
        <div
          className="card__buttons"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Button
            // onClick={() => deleteContacts()}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
            type="primary"
            danger
          >
            Удалить
          </Button>
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "0.5rem",
            }}
            type="primary"
          >
            Изменить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
