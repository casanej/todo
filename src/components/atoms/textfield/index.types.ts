import { InputSizes } from "../../../models/styling";
import { IconsAvailable } from "../icon/index.types";

export interface TextfieldProps {
  iconSuffix?: IconsAvailable;
  onFocus?: () => void;
  onChange?: (value: string, name: string) => void;
  onBlur?: (value: string, name: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  size?: InputSizes;
  value?: string;
}

export interface TextfieldStyle {
  size: InputSizes;
}