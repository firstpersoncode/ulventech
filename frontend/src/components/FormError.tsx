import { Refresh } from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

interface IFormErrorProps {
  message: string;
  isLoading: boolean;
  onRefetch: () => void;
}

export default function FormError({
  message,
  isLoading,
  onRefetch,
}: IFormErrorProps) {
  return (
    <>
      <Alert severity="error" sx={{ mb: 2 }}>
        <Typography>{message}</Typography>
      </Alert>

      <Stack flexDirection="row" justifyContent="flex-end">
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
      </Stack>
    </>
  );
}
