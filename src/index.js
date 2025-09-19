import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

class WebComponent extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(
      <React.StrictMode>
        <HashRouter>
          <App route={this.getAttribute('route') || '/'} />
        </HashRouter>
      </React.StrictMode>
    );
  }
}

const ELEMENT_NAME = 'brsr-stable';

if (customElements.get(ELEMENT_NAME)) {
  console.log(`Skipping registration for <${ELEMENT_NAME}> (already registered)`);
} else {
  customElements.define(ELEMENT_NAME, WebComponent);
}