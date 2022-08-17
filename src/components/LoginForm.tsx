import { Button, Card, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedselector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedselector((state) => state.auth);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();

  const submit = () => {
    login(username, password);
  };
  return (
    <Card bordered={true}>
      <Form onFinish={submit}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[rules.required("Пожалуйста введите имя пользователя!")]}
        >
          <Input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[rules.required("Пожалуйста введите пароль!")]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
