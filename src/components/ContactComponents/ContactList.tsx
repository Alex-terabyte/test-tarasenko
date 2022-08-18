import React, { FC } from "react";
import ContactItem from "./ContactItem";
import { IContact } from "./../../models/IContact";
import { Typography } from "antd";

interface ContactProps {
  contacts: IContact[];
}

const ContactList: FC<ContactProps> = (props) => {
  return (
    <div>
      {props.contacts.map((contact) => (
        <ContactItem key={contact.phone} contacts={contact} />
      ))}
    </div>
  );
};

export default ContactList;
