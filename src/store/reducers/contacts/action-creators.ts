import { AppDispatch } from "../..";
import { IContact } from "./../../../models/IContact";
import { ContactActionEnum, SetContactsAction } from "./types";
import axios from "axios";

export const ContactActionCreators = {
  setContact: (payload: IContact[]): SetContactsAction => ({
    type: ContactActionEnum.SET_CONTACT,
    payload,
  }),
  fetchContact: () => async (dispatch: AppDispatch) => {
    try {
      const responce = await axios.get("./contacts.json");
      dispatch(ContactActionCreators.setContact(responce.data));
    } catch (error) {
      console.log(error);
    }
  },
};
