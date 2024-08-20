import { AssetCreateNestedManyWithoutCategoriesInput } from "./AssetCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  assets?: AssetCreateNestedManyWithoutCategoriesInput;
  categoryName?: string | null;
  description?: string | null;
};
