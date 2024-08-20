import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  assets?: AssetListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  locationName?: StringNullableFilter;
};
