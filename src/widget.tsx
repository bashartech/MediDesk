import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatWidget from './components/widget/ChatWidget';
import './index.css';
import type { WidgetConfig, MediDeskAPI } from './types/widget';

/**
 * MediDesk Widget Entry Point
 * This is the standalone widget that can be embedded on any website
 */

// Store widget state
let widgetState = {
  isOpen: false,
  container: null as HTMLElement | null,
  root: null as any
};

// Initialize the widget
function initWidget(config: WidgetConfig = {}) {
  // Get or create widget container
  let container = document.getElementById('medidesk-widget-root');

  if (!container) {
    container = document.createElement('div');
    container.id = 'medidesk-widget-root';
    container.style.position = 'fixed';
    container.style.zIndex = '999999';

    // Set position based on config
    const position = config.position || 'bottom-right';
    if (position === 'bottom-right') {
      container.style.bottom = '0';
      container.style.right = '0';
    } else if (position === 'bottom-left') {
      container.style.bottom = '0';
      container.style.left = '0';
    } else if (position === 'top-right') {
      container.style.top = '0';
      container.style.right = '0';
    } else if (position === 'top-left') {
      container.style.top = '0';
      container.style.left = '0';
    }

    document.body.appendChild(container);
  }

  // Mount React widget
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ChatWidget />
    </React.StrictMode>
  );

  widgetState.container = container;
  widgetState.root = root;

  return {
    container,
    root
  };
}

// Widget control functions
function openWidget() {
  const event = new CustomEvent('medidesk:open');
  window.dispatchEvent(event);
  widgetState.isOpen = true;
}

function closeWidget() {
  const event = new CustomEvent('medidesk:close');
  window.dispatchEvent(event);
  widgetState.isOpen = false;
}

function toggleWidget() {
  if (widgetState.isOpen) {
    closeWidget();
  } else {
    openWidget();
  }
}

// Auto-initialize if script tag has data attributes
function autoInit() {
  const scripts = document.querySelectorAll('script[src*="medidesk"]');
  const scriptTag = scripts[scripts.length - 1] as HTMLScriptElement;

  if (scriptTag) {
    const config: WidgetConfig = {
      hospitalId: scriptTag.dataset.hospitalId,
      position: scriptTag.dataset.position as any,
      theme: scriptTag.dataset.theme,
      autoOpen: scriptTag.dataset.autoOpen === 'true'
    };

    initWidget(config);

    // Auto-open if configured
    if (config.autoOpen) {
      setTimeout(openWidget, 1000);
    }
  }
}

// Expose global API
const MediDeskAPI: MediDeskAPI = {
  init: initWidget,
  version: '2.1.0',
  open: openWidget,
  close: closeWidget,
  toggle: toggleWidget,
  config: {}
};

window.MediDesk = MediDeskAPI;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoInit);
} else {
  autoInit();
}

export { initWidget };
