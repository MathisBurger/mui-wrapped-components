import React, {useState} from "react";
import {SnackbarContext} from "../hooks/useSnackbar";
import {SnackbarValues} from "../types/Snackbar";
import {Alert, AlertProps, Snackbar} from "@mui/material";

interface SnackbarProviderProps {
  defaultDuration?: number;
  onlyCloseWithClick?: boolean
}

const SnackbarProvider = ({children, defaultDuration, onlyCloseWithClick}: React.PropsWithChildren<SnackbarProviderProps>) => {

  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<SnackbarValues>({
    snackbarText: '',
    snackbarColor: 'success'
  });

  const closeTimeout = (timeout: number) => setTimeout(closeSnackbar, timeout);

  const openSnackbar = (
    snackbarColor: AlertProps['severity'],
    snackbarText: string,
    snackbarDuration?: number
  )  => {
    console.log("Moin");
    setValues({snackbarColor, snackbarText});
    setOpen(true);
    if (snackbarDuration) {
      closeTimeout(snackbarDuration);
    } else if (!onlyCloseWithClick) {
      if (defaultDuration) closeTimeout(defaultDuration);
    }
  }

  const closeSnackbar = () => setOpen(false);

  return (
    <SnackbarContext.Provider value={{openSnackbar, closeSnackbar}}>
      {children}
      <Snackbar open={open} onClose={closeSnackbar}>
        <Alert color={values.snackbarColor} onClose={closeSnackbar}>
          {values.snackbarText}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

SnackbarProvider.defaultProps = {
  defaultDuration: 2000,
  onlyCloseWithClick: false
};

export default SnackbarProvider;
