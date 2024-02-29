import { InputSizes } from "../../../models/styling";
import { IconsAvailable } from "../icon/index.types";

export interface TextfieldProps {
  iconSuffix?: IconsAvailable;
  onChange?: (value: string, name: string) => void;
  onBlur?: (value: string, name: string) => void;
  placeholder?: string;
  size?: InputSizes;
  value?: string;
}

export interface TextfieldStyle {
  size: InputSizes;
}