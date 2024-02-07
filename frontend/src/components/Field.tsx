import { renderLabel } from "@/libs/renderLabel";
import { IFormField } from "@/store/form";
import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useMemo } from "react";

interface IFieldProps extends IFormField {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Field({
  type,
  fieldName,
  options,
  ...props
}: IFieldProps) {
  return useMemo(() => {
    const field = {
      text: (
        <TextField
          fullWidth
          label={renderLabel(fieldName)}
          name={fieldName}
          type="text"
          {...props}
        />
      ),
      email: (
        <TextField
          fullWidth
          label={renderLabel(fieldName)}
          name={fieldName}
          type="email"
          {...props}
        />
      ),
      number: (
        <TextField
          fullWidth
          label={renderLabel(fieldName)}
          name={fieldName}
          type="number"
          {...props}
        />
      ),
      multiline: (
        <TextField
          fullWidth
          label={renderLabel(fieldName)}
          name={fieldName}
          type="text"
          multiline
          minRows={4}
          {...props}
        />
      ),
      select: (
        <TextField
          fullWidth
          label={renderLabel(fieldName)}
          name={fieldName}
          select
          SelectProps={{ native: true }}
          {...props}
        >
          {options?.map((option, i) => (
            <option key={`${option}-${i}`} value={option}>
              {renderLabel(option)}
            </option>
          ))}
        </TextField>
      ),
    }[type];

    if (field) return field;
    return <Typography>Field type not found.</Typography>;
  }, [type, fieldName, options, props]);
}
