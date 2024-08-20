import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AssetCreateInput = {
  assetCode?: string | null;
  category?: CategoryWhereUniqueInput | null;
  currentValue?: number | null;
  depreciationPeriod?: number | null;
  depreciationRate?: number | null;
  description?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  purchaseCost?: number | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
