import React, { FC, useEffect, useState } from "react";
import { useActions } from "./../hooks/useActions";
import { useTypedselector } from "./../hooks/useTypedSelector";
import { Input, Typography } from "antd";
import ContactList from "./../components/ContactComponents/ContactList";
import { IContact } from "./../models/IContact";

const Contacts: FC = () => {
  const { contacts } = useTypedselector((state) => state.contacts);
  const { fetchContact } = useActions();

  useEffect(() => {
    fetchContact();
    console.log(contacts);
  }, []);

  const { Title } = Typography;

  return (
    <>
      <Title level={1} className="mainTitle">
        Список контактов
      </Title>
      <Input
        placeholder="Поиск контакта..."
        onChange={(e) =>
          contacts.filter((element) => element.name === e.target.value)
        }
      />
      <ContactList contacts={contacts} />;
    </>
  );
};

export default Contacts;
