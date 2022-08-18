import { AppDispatch } from "../..";
import { IContact } from "./../../../models/IContact";
import {
  AddContactsAction,
  ContactActionEnum,
  DeleteContactsAction,
  SetContactsAction,
} from "./types";
import ContactService from "./../../../api/ContactService";

export const ContactActionCreators = {
  setContact: (payload: IContact[]): SetContactsAction => ({
    type: ContactActionEnum.SET_CONTACT,
    payload,
  }),
  addContact: (payload: IContact[]): AddContactsAction => ({
    type: ContactActionEnum.ADD_CONTACT,
    payload,
  }),
  fetchContact: () => async (dispatch: AppDispatch) => {
    try {
      const responce = await ContactService.getContacts();
      dispatch(ContactActionCreators.setContact(responce.data));
    } catch (error) {
      console.log(error);
    }
  },
  deleteContact: (payload: number): DeleteContactsAction => ({
    type: ContactActionEnum.DELETE_CONTACT,
    payload,
  }),
  createContact: (contact: IContact) => async (dispatch: AppDispatch) => {
    try {
      const contacts = "[]";
      const json = JSON.parse(contacts) as IContact[];
      json.push(contact);

      dispatch(ContactActionCreators.addContact(json));
      const addContact = await ContactService.addContact(
        // contact.id,
        contact.name,
        contact.username,
        contact.email,
        contact.phone,
        contact.website
      );
      console.log("contacts - ", contacts, "json - ", json);
    } catch (error) {
      console.log(error);
    }
  },
};
