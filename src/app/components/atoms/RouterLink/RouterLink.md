```tsx
import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "../../../../assets/styles/styles.output.css";

import RouterLink from "./";

<Router history={createBrowserHistory()}>
  <RouterLink to="/" label="Router link label" />
</Router>;
```
