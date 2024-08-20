import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoryName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
