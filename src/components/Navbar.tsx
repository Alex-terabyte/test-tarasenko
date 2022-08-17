import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedselector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const isAuth = useTypedselector((state) => state.auth.isAuth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}></Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
