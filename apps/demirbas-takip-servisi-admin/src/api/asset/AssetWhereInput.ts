import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AssetWhereInput = {
  assetCode?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  currentValue?: FloatNullableFilter;
  depreciationPeriod?: IntNullableFilter;
  depreciationRate?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  name?: StringNullableFilter;
  purchaseCost?: FloatNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
