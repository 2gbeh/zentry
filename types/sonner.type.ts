import { ReactNode } from "react";

export type SonnerType = (
  message: ReactNode,
  options?: SonnerOptions,
) => void;

export interface SonnerOptions {
  id?: string;
  description?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  dismissible?: boolean;
  icon?: ReactNode;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  onAutoClose?: () => void;
  onDismiss?: () => void;
  closeButton?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface SonnerExternalToast {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  createdAt: number;
  visible: boolean;
  // and possibly other internal metadata
}

/**
toast('Message', {
  description: 'Additional details here',
  duration: 4000, // in milliseconds
  position: 'top-center', // 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo clicked'),
  },
  cancel: {
    label: 'Cancel',
    onClick: () => console.log('Cancel clicked'),
  },
  icon: <YourIconComponent />,
  important: true, // Prevent auto-dismiss
});

 */
