import { Asset } from "../asset/Asset";

export type Category = {
  assets?: Array<Asset>;
  categoryName: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
};
