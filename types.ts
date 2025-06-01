// import React from 'react'; // No longer strictly needed with the change below

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradio-app': JSX.IntrinsicElements['div'] & { // Changed from React.HTMLAttributes<HTMLElement>
        src?: string;
        
        // Other potential Gradio-specific attributes can be added here if needed, e.g.:
        // theme_mode?: "light" | "dark";
        // initial_height?: string; // e.g., "500px"
        // For this app, only 'src' is explicitly used from the original code.
      };
    }
  }
}

// This file can be expanded with other global types or interfaces as the application grows.
// For example:
// export interface UserProfile {
//   id: string;
//   name: string;
//   email?: string;
// }

export {}; // Ensures this file is treated as a module
