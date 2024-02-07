import Field from "@/components/Field";
import { IFormField } from "@/store/form";
import { Refresh, Send } from "@mui/icons-material";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { ChangeEvent } from "react";

interface IFormProps {
  fields: IFormField[];
  isLoading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRefetch: () => void;
  onSubmit: () => void;
}

export default function Form({
  fields,
  isLoading,
  onChange,
  onRefetch,
  onSubmit,
}: IFormProps) {
  return (
    <>
      {fields.length > 0 &&
        fields.map((field, i) => (
          <Box
            key={`${field.fieldName}-${i}`}
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              opacity: isLoading ? 0.3 : 1,
              pointerEvents: isLoading ? "none" : "auto",
            }}
          >
            <Field {...field} onChange={onChange} />
          </Box>
        ))}

      <Stack flexDirection="row" justifyContent="flex-end" gap={2}>
        <Button
          disabled={isLoading}
          variant="contained"
          sx={{ textTransform: "unset" }}
          color="primary"
          onClick={onRefetch}
          endIcon={
            isLoading ? (
              <CircularProgress size={15} />
            ) : (
              <Refresh sx={{ width: 15 }} />
            )
          }
        >
          Refetch
        </Button>

        <Button
          disabled={isLoading}
          variant="contained"
          sx={{ textTransform: "unset" }}
          color="success"
          onClick={onSubmit}
          endIcon={
            isLoading ? (
              <CircularProgress size={15} />
            ) : (
              <Send sx={{ width: 15 }} />
            )
          }
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}
