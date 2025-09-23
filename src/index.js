import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

class WebComponent extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);

    const route = this.getAttribute("route") || "/";

    root.render(
      <React.StrictMode>
        <HashRouter>
          <App route={route} />
        </HashRouter>
      </React.StrictMode>
    );
  }
}

// Define your custom element for Liferay
const ELEMENT_NAME = "kri-domestic";

if (!customElements.get(ELEMENT_NAME)) {
  customElements.define(ELEMENT_NAME, WebComponent);
} else {
  console.log(
    `Skipping registration for <${ELEMENT_NAME}> (already registered)`
  );
}
