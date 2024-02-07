import { renderLabel } from "@/libs/renderLabel";
import { ISubmitForm } from "@/services/form";
import { Refresh } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

interface IFormSuccessProps {
  message: string;
  isLoading: boolean;
  fields: ISubmitForm;
  onRefetch: () => void;
}

export default function FormSuccess({
  message,
  fields,
  onRefetch,
  isLoading,
}: IFormSuccessProps) {
  return (
    <>
      <Alert severity="success" sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 18, mb: 2 }}>
          {message}
        </Typography>
        {Object.keys(fields).map((field, i) => (
          <Box key={`${field}-${i}`} sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {renderLabel(field)}
            </Typography>
            <Typography variant="body2">{fields[field]}</Typography>
          </Box>
        ))}
      </Alert>

      <Stack flexDirection="row" justifyContent="flex-end">
        <Button
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
      </Stack>
    </>
  );
}
