import { AssetUpdateManyWithoutCategoriesInput } from "./AssetUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  assets?: AssetUpdateManyWithoutCategoriesInput;
  categoryName?: string | null;
  description?: string | null;
};
