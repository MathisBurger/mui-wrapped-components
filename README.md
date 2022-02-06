# mui-wrapped-components

> A collection of wrapped MUI5 components

[![NPM](https://img.shields.io/npm/v/mui-wrapped-components.svg)](https://www.npmjs.com/package/mui-wrapped-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-wrapped-components
```

## Usage

```tsx
import {SnackbarProvider, useSnackbar} from "mui-wrapped-components";
import {Button} from "@mui/material";

const App = () => {

  const {openSnackbar} = useSnackbar();

  return (
    <SnackbarProvider>
      <Button onClick={() => openSnackbar("success", "Example", 2000)}>
        open Snackbar
      </Button>
    </SnackbarProvider>
  )
}
```

## Disclaimer
This library is still in development. Therefore, some components may not exist or
are very buggy implemented.

## License

MIT © [MathisBurger](https://github.com/MathisBurger)
