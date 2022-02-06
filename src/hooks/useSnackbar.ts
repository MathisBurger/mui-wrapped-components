import {createContext, useContext} from "react";
import {SnackbarMethods} from "../types/Snackbar";


export const SnackbarContext = createContext<SnackbarMethods>({
    openSnackbar: () => {},
    closeSnackbar: () => {}
});


const useSnackbar = () => useContext(SnackbarContext);

export default useSnackbar;
