import { ISubmitForm } from "@/services/form";
import { IFormField } from "@/store/form";

export function normalizeForm(fields: IFormField[]): ISubmitForm {
  let form: ISubmitForm = {};

  fields.forEach((f) => {
    form[f.fieldName] = f.value;
  });

  return form;
}
