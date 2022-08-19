import { Button, Form, Input, InputNumber, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import { IContact } from "../../models/IContact";
import { rules } from "../../utils/rules";

interface ContactFormProps {
  contacts: IContact;
  submit: (event: IContact) => void;
}

const EditContactForm: FC<ContactFormProps> = (props) => {
  const [contact, setContact] = useState<IContact>({
    id: props.contacts.id,
    name: props.contacts.name,
    username: props.contacts.username,
    email: props.contacts.email,
    phone: props.contacts.phone,
    website: props.contacts.website,
  } as IContact);

  const submitForm = () => {
    props.submit({
      ...contact,
      id: contact.id,
      name: contact.name,
      username: contact.username,
      email: contact.email,
      phone: contact.phone,
      website: contact.website,
    });
  };
  return (
    <Form onFinish={submitForm}>
      <Form.Item label="Имя контакта" name="name" initialValue={contact.name}>
        <Input
          id="1"
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          value={contact.name}
          placeholder="Пожалуйста, введиет имя"
        />
      </Form.Item>

      <Form.Item
        label="Телефон контакта"
        name="phone"
        initialValue={contact.phone}
      >
        <Input
          id="2"
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          value={contact.phone}
          placeholder="Пожалуйста, введиет телефон"
        />
      </Form.Item>

      <Form.Item
        label="Ник контакта"
        name="username"
        initialValue={contact.username}
      >
        <Input
          id="3"
          onChange={(e) => setContact({ ...contact, username: e.target.value })}
          value={"contact.username"}
          placeholder="Пожалуйста, введиет ник"
        />
      </Form.Item>

      <Form.Item
        label="Почта контакта"
        name="email"
        initialValue={contact.email}
      >
        <Input
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          value={contact.email}
          placeholder="Пожалуйста, введиет почту"
        />
      </Form.Item>

      <Form.Item
        label="Сайт контакта"
        name="site"
        initialValue={contact.website}
      >
        <Input
          onChange={(e) => setContact({ ...contact, website: e.target.value })}
          value={contact.website}
          placeholder="Пожалуйста, введиет сайт"
        />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Изменить контакт
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EditContactForm;
