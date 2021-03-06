import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import { createStore } from "redux";

import PopupView from "../../Components/Views/Popup/PopupView";

import { init } from "../global-pollution";
init(window);

let store = createStore((state = {}/* , action */) => {
    return state;
});

render(
  <MuiThemeProvider store={store} muiTheme={getMuiTheme()}>
    <PopupView context={window} />
  </MuiThemeProvider>,
  document.getElementById("main")
);
