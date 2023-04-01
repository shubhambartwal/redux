import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
store.subscribe(() => console.log(store.getState()));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
