import axios, { AxiosResponse } from "axios";
import { IContact } from "./../models/IContact";

export default class ContactService {
  static async getContacts(): Promise<AxiosResponse<IContact[]>> {
    return axios.get<IContact[]>("http://localhost:5000/contacts");
  }
  static async addContact(
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
  ): Promise<AxiosResponse<IContact[]>> {
    return axios.post("http://localhost:5000/contacts", {
      id,
      name,
      username,
      email,
      phone,
      website,
    });
  }

  static async deleteContacts(id: number): Promise<AxiosResponse<IContact[]>> {
    return axios.delete(`http://localhost:5000/contacts/${id}`);
  }

  static async editContacts(
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
  ): Promise<AxiosResponse<IContact[]>> {
    return axios.patch(
      `http://localhost:5000/contacts/${id}`,
      {
        name,
        username,
        email,
        phone,
        website,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
