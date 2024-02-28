import { ReactNode } from "react";

export interface ButtonProps extends ButtonStyles {
  children: ReactNode;
  onClick?: () => void;
}

export interface ButtonStyles {
  toggled?: boolean;
}