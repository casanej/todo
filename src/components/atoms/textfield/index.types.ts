import { InputSizes } from "../../../models/styling";
import { IconsAvailable } from "../icon/index.types";

export interface TextfieldProps {
  iconSuffix?: IconsAvailable;
  placeholder?: string;
  size?: InputSizes;
}

export interface TextfieldStyle {
  size: InputSizes;
}