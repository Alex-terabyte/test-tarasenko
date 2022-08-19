import { ContactAction, ContactActionEnum, ContactState } from "./types";
import { IContact } from "./../../../models/IContact";

const initialState: ContactState = {
  contacts: [],
};

export default function contactReducer(
  state = initialState,
  action: ContactAction
): ContactState {
  switch (action.type) {
    case ContactActionEnum.SET_CONTACT:
      return { ...state, contacts: action.payload };

    case ContactActionEnum.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };
    case ContactActionEnum.ADD_CONTACT:
      return { ...state, contacts: state.contacts.concat(action.payload) };

    default:
      return state;
  }
}
