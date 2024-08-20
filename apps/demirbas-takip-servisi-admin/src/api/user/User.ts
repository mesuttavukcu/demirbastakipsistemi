import { Asset } from "../asset/Asset";
import { JsonValue } from "type-fest";

export type User = {
  assets?: Array<Asset>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
