import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IFormField {
  fieldName: string;
  type: string;
  value: string;
  options?: string[];
}

interface IFieldPayload {
  fieldName: string;
  value: string;
}

export interface IFormState {
  fields: IFormField[];
}

const initialState: IFormState = {
  fields: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<IFormField[]>) => {
      state.fields = action.payload;
    },
    setFieldValue: (state, action: PayloadAction<IFieldPayload>) => {
      let currFields = [...state.fields];

      currFields.forEach((f) => {
        if (f.fieldName === action.payload.fieldName)
          f.value = action.payload.value;
      });

      state.fields = currFields;
    },
  },
});

export const { setForm, setFieldValue } = formSlice.actions;
export const formReducer = formSlice.reducer;
