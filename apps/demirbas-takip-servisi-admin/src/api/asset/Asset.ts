import { Category } from "../category/Category";
import { Location } from "../location/Location";
import { User } from "../user/User";

export type Asset = {
  assetCode: string | null;
  category?: Category | null;
  createdAt: Date;
  currentValue: number | null;
  depreciationPeriod: number | null;
  depreciationRate: number | null;
  description: string | null;
  id: string;
  location?: Location | null;
  name: string | null;
  purchaseCost: number | null;
  purchaseDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
