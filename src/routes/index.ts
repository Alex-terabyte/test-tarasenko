import Login from "../pages/Login";
import Contacts from "./../pages/Contacts";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  CONTACTS = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    component: Login,
  },
];
export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.CONTACTS,
    component: Contacts,
  },
];
