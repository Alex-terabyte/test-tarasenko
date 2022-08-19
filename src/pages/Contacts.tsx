import React, { FC, useEffect, useState } from "react";
import { useActions } from "./../hooks/useActions";
import { useTypedselector } from "./../hooks/useTypedSelector";
import { Input, Typography, Button, Layout, Modal } from "antd";
import ContactList from "./../components/ContactComponents/ContactList";
import { IContact } from "./../models/IContact";
import "../App.css";
import AddContactForm from "../components/ContactComponents/AddContactForm";

const Contacts: FC = () => {
  const { contacts } = useTypedselector((state) => state.contacts);
  const { fetchContact, createContact } = useActions();
  const [value, setVelue] = useState("");
  const [modal, setModal] = useState(false);

  const { Title } = Typography;

  useEffect(() => {
    fetchContact();
  }, []);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(value.toLowerCase());
  });

  const addNewContact = (event: IContact) => {
    setModal(false);
    createContact(event);
  };

  return (
    <Layout>
      <Title level={1} className="mainTitle">
        Список контактов
      </Title>
      <Input
        placeholder="Поиск контакта..."
        onChange={(e) => setVelue(e.target.value)}
        className="searchInput"
      />
      <Button
        className="addButton"
        type="default"
        onClick={() => setModal(!modal)}
      >
        Добавить контакт
      </Button>
      <Modal
        title="Добавить контакт"
        visible={modal}
        footer={null}
        onCancel={() => setModal(false)}
      >
        <AddContactForm contacts={contacts} submit={addNewContact} />
      </Modal>
      <ContactList contacts={filteredContacts} />;
    </Layout>
  );
};

export default Contacts;
