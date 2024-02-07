import { IFormField } from "@/store/form";
import axios from "axios";

interface IFormFieldResponse {
  data: {
    success: boolean;
    message: string;
    data: IFormField[];
  };
}

export type ISubmitForm = {
  [x: string]: string;
}

interface ISubmitFormResponse {
  data: {
    success: boolean;
    message: string;
    data: ISubmitForm;
  };
}

export async function fetchFormFields(): Promise<IFormField[]> {
  const response: IFormFieldResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/form`,
    {
      validateStatus: status => status < 500
    }
  );
  if (!response?.data) throw new Error("Something went wrong.");
  if (!response.data.success) throw new Error(response.data.message);
  return response.data.data;
}


export async function submitForm(form: ISubmitForm): Promise<ISubmitFormResponse["data"]> {
  const response: ISubmitFormResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/form`,
    form,
    {
      validateStatus: status => status < 500
    }
  );
  if (!response?.data) throw new Error("Something went wrong.");
  if (!response.data.success) throw new Error(response.data.message);
  return response.data;
}
