import React, { FC, useState } from "react";
import { Button, Form, Input, Layout, Row } from "antd";
import { IContact } from "./../../models/IContact";
import { rules } from "../../utils/rules";

interface ContactFormProps {
  contacts: IContact[];
  submit: (event: IContact) => void;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const [contact, setContact] = useState<IContact>({
    // id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  } as IContact);

  const submitForm = () => {
    props.submit({
      ...contact,
      // id: contact.id,
      name: contact.name,
      username: contact.username,
      email: contact.email,
      phone: contact.phone,
      website: contact.website,
    });
  };

  return (
    <Form onFinish={submitForm}>
      {/* <Form.Item
        label="Id контакта"
        name="id"
        rules={[rules.required("Пожалуйста, введиет id > 10!")]}
      >
        <Input
          onChange={(e) =>
            setContact({ ...contact, id: Number(e.target.value) })
          }
          value={contact.id}
          placeholder="Пожалуйста, введиет id id > 10"
        />
      </Form.Item> */}

      <Form.Item
        label="Имя контакта"
        name="name"
        rules={[rules.required("Пожалуйста, введиет имя!")]}
      >
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
        rules={[rules.required("Пожалуйста, введиет телефон!")]}
      >
        <Input
          id="2"
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          value={contact.phone}
          placeholder="Пожалуйста, введиет телефон"
        />
      </Form.Item>

      <Form.Item label="Ник контакта" name="username">
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
        // rules={[rules.required("Пожалуйста, введиет почту!")]}
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
        // rules={[rules.required("Пожалуйста, введиет сайт!")]}
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
            Создать контакт
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default ContactForm;
