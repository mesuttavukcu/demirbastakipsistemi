import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { LocationTitle } from "../location/LocationTitle";
import { UserTitle } from "../user/UserTitle";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assetCode" source="assetCode" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <NumberInput label="currentValue" source="currentValue" />
        <NumberInput
          step={1}
          label="depreciationPeriod"
          source="depreciationPeriod"
        />
        <NumberInput label="depreciationRate" source="depreciationRate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="purchaseCost" source="purchaseCost" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
