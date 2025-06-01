import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradio-app': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string; // Standard Gradio prop for URL source
          space?: string; // Alternative for Hugging Face Spaces
          theme_mode?: 'light' | 'dark'; // Optional theme mode
          // Add other Gradio props if needed
        },
        HTMLElement
      >;
    }
  }
}

// This export ensures the file is treated as a module.
// The import of 'react' also achieves this.
export {};
