import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  assets?: AssetListRelationFilter;
  categoryName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
