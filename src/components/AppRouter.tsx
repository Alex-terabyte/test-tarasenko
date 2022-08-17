import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTypedselector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const isAuth = useTypedselector((state) => state.auth.isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
