import { AppDispatch } from "../..";
import IUser from "../../../models/IUser";
import UserService from "./../../../api/UserService";

import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));

        const response = await UserService.getUsers();
        const mockUser = response.data.find(
          (user: IUser) =>
            user.username === username && user.password === password
        );
        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setIsAuth(true));
        } else {
          dispatch(
            AuthActionCreators.setError("Некорректный логин или пароль")
          );
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      } catch (e) {
        dispatch(AuthActionCreators.setError("Login error"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
