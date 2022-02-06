import {AlertProps} from "@mui/material";

export interface SnackbarValues {
  snackbarColor: AlertProps['severity'];
  snackbarText: string;
}

export interface SnackbarMethods {
  openSnackbar: (snackbarColor: AlertProps['severity'], snackbarText: string, snackbarDuration?: number) => void;
  closeSnackbar: () => void;
}
