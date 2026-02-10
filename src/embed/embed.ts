/**
 * MediDesk Embed Script
 * This script allows MediDesk to be embedded on any website
 *
 * Usage:
 * <script src="https://your-domain.com/medidesk.js"></script>
 */

import type { WidgetConfig } from '../types/widget';

(function() {
  'use strict';

  // Prevent multiple initializations
  if (window.MediDeskInitialized) {
    console.warn('MediDesk is already initialized');
    return;
  }

  window.MediDeskInitialized = true;

  // Configuration options (can be customized via data attributes)
  const config: WidgetConfig = {
    position: 'bottom-right', // bottom-right, bottom-left, top-right, top-left
    theme: 'blue', // blue, green, purple
    hospitalId: 'demo-hospital',
    autoOpen: false
  };

  // Read configuration from script tag data attributes
  const scriptTag = document.currentScript as HTMLScriptElement;
  if (scriptTag) {
    config.position = (scriptTag.dataset.position as any) || config.position;
    config.theme = scriptTag.dataset.theme || config.theme;
    config.hospitalId = scriptTag.dataset.hospitalId || config.hospitalId;
    config.autoOpen = scriptTag.dataset.autoOpen === 'true';
  }

  // Create container for MediDesk widget
  function initializeMediDesk() {
    // Check if container already exists
    if (document.getElementById('medidesk-root')) {
      console.warn('MediDesk container already exists');
      return;
    }

    // Create root container
    const root = document.createElement('div');
    root.id = 'medidesk-root';
    root.setAttribute('data-position', config.position || 'bottom-right');
    root.setAttribute('data-theme', config.theme || 'blue');
    root.setAttribute('data-hospital-id', config.hospitalId || 'demo-hospital');

    // Add to body
    document.body.appendChild(root);

    // Load React app
    loadMediDeskApp();
  }

  // Load the MediDesk React application
  function loadMediDeskApp() {
    // In production, this would load the bundled React app
    // For now, we'll use the development setup
    console.log('MediDesk widget initialized with config:', config);

    // The actual React app will be mounted to #medidesk-root
    // This is handled by the main React application
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMediDesk);
  } else {
    initializeMediDesk();
  }

  // Note: The global MediDesk API is now defined in widget.tsx
  // This file is kept for backward compatibility and documentation

})();

export {};
