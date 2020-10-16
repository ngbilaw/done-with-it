import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import { number } from 'yup';

function AppFormPicker({ 
  icon,
  items, 
  name, 
  numberOfColumns,
  PickerItemComponent, 
  placeholder, 
  width }) {
  const {
    setFieldValue,
    errors,
    touched,
    values
  } = useFormikContext();

  return (
    <>
      <AppPicker
        icon={icon}
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;