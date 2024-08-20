import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetCode?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  currentValue?: SortOrder;
  depreciationPeriod?: SortOrder;
  depreciationRate?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  purchaseCost?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
