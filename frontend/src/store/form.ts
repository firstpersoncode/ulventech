import { create } from "zustand";

export type IFormField = {
  fieldName: string;
  type: string;
  value: string;
  options?: string[];
}

interface IFieldPayload {
  fieldName: string;
  value: string;
}

interface IFormStore {
  fields: IFormField[];
  setForm: (fields: IFormField[]) => void;
  setFieldValue: ({ fieldName, value }: IFieldPayload) => void;
}

export const useFormStore = create<IFormStore>((set) => ({
  fields: [],
  setForm: (fields) => set({ fields }),
  setFieldValue: ({ fieldName, value }) =>
    set((state) => {
      let currFields = [...state.fields];

      currFields.forEach((f) => {
        if (f.fieldName === fieldName) f.value = value;
      });

      return { fields: currFields };
    }),
}));
