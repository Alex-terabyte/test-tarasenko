import { Button, Modal } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedselector } from "../../hooks/useTypedSelector";
import { IContact } from "../../models/IContact";
import ContactForm from "./AddContactForm";
import "../../App";
import App from "./../../App";
import EditContactForm from "./EditContactForm";

interface ContactProps {
  contacts: IContact;
}

const ContactItem: FC<ContactProps> = (props) => {
  const { deleteContactAsync, edeteContactAsync } = useActions();
  const [modal, setModal] = useState(false);

  const deleteContacts = () => {
    const confirm = window.confirm("Вы действительно хотите удалить контакт?");
    if (confirm) {
      deleteContactAsync(props.contacts.id);
    }
  };

  const editNewContact = (event: IContact) => {
    setModal(false);
    edeteContactAsync(event);
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <h3>Имя: {props.contacts.name}</h3>
        <h4>Номер телефона: {props.contacts.phone}</h4>
        <h4>Электронная почта: {props.contacts.email}</h4>
        <h4>Сайт: {props.contacts.website}</h4>
        <div className="card__buttons">
          <Button
            className="card__button"
            onClick={() => deleteContacts()}
            type="primary"
            danger
          >
            Удалить
          </Button>
          <Modal
            title="Изменить контакт"
            visible={modal}
            footer={null}
            onCancel={() => setModal(false)}
          >
            <EditContactForm
              contacts={props.contacts}
              submit={editNewContact}
            ></EditContactForm>
          </Modal>
          <Button
            className="card__button"
            onClick={() => setModal(!modal)}
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
