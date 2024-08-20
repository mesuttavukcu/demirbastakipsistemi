import { AssetCreateNestedManyWithoutLocationsInput } from "./AssetCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  assets?: AssetCreateNestedManyWithoutLocationsInput;
  description?: string | null;
  locationName?: string | null;
};
