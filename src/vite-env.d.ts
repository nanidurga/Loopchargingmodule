/// <reference types="vite/client" />
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'shadow-intensity'?: string | number;
        exposure?: string | number;
        'environment-image'?: string;
        ar?: boolean;
        'ar-modes'?: string;
        loading?: string;
        'disable-zoom'?: boolean | string;
        style?: React.CSSProperties;
      };
    }
  }
}
