import { ItemStatus } from "./item";

export interface ListFilter {
  status?: ItemStatus;
  description?: string;
}