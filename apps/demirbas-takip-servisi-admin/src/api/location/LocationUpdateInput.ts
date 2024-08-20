import { AssetUpdateManyWithoutLocationsInput } from "./AssetUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  assets?: AssetUpdateManyWithoutLocationsInput;
  description?: string | null;
  locationName?: string | null;
};
