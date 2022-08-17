import { IContact } from "./../../../models/IContact";

export interface ContactState {
  contacts: IContact[];
}

export enum ContactActionEnum {
  SET_CONTACT = "SET_CONTACT",
}

export interface SetContactsAction {
  type: ContactActionEnum.SET_CONTACT;
  payload: IContact[];
}

export type ContactAction = SetContactsAction;
