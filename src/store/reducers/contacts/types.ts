import { IContact } from "./../../../models/IContact";

export interface ContactState {
  contacts: IContact[];
}

export enum ContactActionEnum {
  SET_CONTACT = "SET_CONTACT",
  DELETE_CONTACT = "DELETE_CONTACT",
  ADD_CONTACT = "ADD_CONTACT",
}

export interface SetContactsAction {
  type: ContactActionEnum.SET_CONTACT;
  payload: IContact[];
}

export interface DeleteContactsAction {
  type: ContactActionEnum.DELETE_CONTACT;
  payload: number;
}

export interface AddContactsAction {
  type: ContactActionEnum.ADD_CONTACT;
  payload: IContact[];
}

export type ContactAction =
  | SetContactsAction
  | DeleteContactsAction
  | AddContactsAction;
