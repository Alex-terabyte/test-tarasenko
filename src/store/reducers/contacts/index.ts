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
    default:
      return state;
  }
}
