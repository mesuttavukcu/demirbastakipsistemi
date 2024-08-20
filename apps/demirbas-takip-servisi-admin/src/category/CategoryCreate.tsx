import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assets"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <TextInput label="categoryName" source="categoryName" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
