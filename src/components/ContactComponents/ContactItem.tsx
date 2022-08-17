import React, { FC } from "react";
import { IContact } from "../../models/IContact";

interface ContactProps {
  contacts: IContact;
}

const ContactItem: FC<ContactProps> = (props) => {
  return (
    <div className="contact">
      <div className="contact__content">
        <h3>Имя: {props.contacts.name}</h3>
        <h4>Номер телефона: {props.contacts.phone}</h4>
        <h4>Электронная почта: {props.contacts.email}</h4>
        <h4>Сайт: {props.contacts.website}</h4>
      </div>
    </div>
  );
};

export default ContactItem;
