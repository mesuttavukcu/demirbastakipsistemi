import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LOCATION_TITLE_FIELD } from "./LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="locationName" source="locationName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Asset"
          target="locationId"
          label="Assets"
        >
          <Datagrid rowClick="show">
            <TextField label="assetCode" source="assetCode" />
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="currentValue" source="currentValue" />
            <TextField label="depreciationPeriod" source="depreciationPeriod" />
            <TextField label="depreciationRate" source="depreciationRate" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="purchaseCost" source="purchaseCost" />
            <TextField label="purchaseDate" source="purchaseDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
