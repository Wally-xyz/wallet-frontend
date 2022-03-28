import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { App } from "./v2/App";
import { globalStyleV2 } from "./styles";

const GlobalStyle = createGlobalStyle`
  ${globalStyleV2}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root"),
);
