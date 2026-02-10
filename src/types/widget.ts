/**
 * MediDesk Widget Global Type Definitions
 * Shared types for the embeddable widget
 */

export interface WidgetConfig {
  hospitalId?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: string;
  autoOpen?: boolean;
}

export interface MediDeskAPI {
  // Initialization
  init: (config?: WidgetConfig) => any;
  version: string;

  // Widget control methods
  open: () => void;
  close: () => void;
  toggle: () => void;

  // Configuration
  config: WidgetConfig;
}

// Global window interface
declare global {
  interface Window {
    MediDeskInitialized?: boolean;
    MediDesk?: MediDeskAPI;
  }
}

export {};
