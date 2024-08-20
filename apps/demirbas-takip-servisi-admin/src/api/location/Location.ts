import { Asset } from "../asset/Asset";

export type Location = {
  assets?: Array<Asset>;
  createdAt: Date;
  description: string | null;
  id: string;
  locationName: string | null;
  updatedAt: Date;
};
