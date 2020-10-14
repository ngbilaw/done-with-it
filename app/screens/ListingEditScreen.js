import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { 
  AppForm, 
  AppFormField, 
  AppFormPicker, 
  SubmitButton 
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().nullable().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: 'red',
    icon: 'apps',
  },
  {
    label: 'Clothing',
    value: 2,
    backgroundColor: 'green',
    icon: 'email',
  },
  {
    label: 'Electronics',
    value: 3,
    backgroundColor: 'blue',
    icon: 'lock',
  },
  {
    label: 'Cars',
    value: 4,
    backgroundColor: 'salmon',
    icon: 'apps',
  },
  {
    label: 'Cameras',
    value: 5,
    backgroundColor: 'dodgerblue',
    icon: 'email',
  },
  {
    label: 'Sports',
    value: 6,
    backgroundColor: 'tomato',
    icon: 'lock',
  },
  {
    label: 'Books',
    value: 7,
    backgroundColor: 'pink',
    icon: 'apps',
  },
  {
    label: 'Movies & Music',
    value: 8,
    backgroundColor: 'yellow',
    icon: 'email',
  },
  {
    label: 'Others',
    value: 9,
    backgroundColor: 'gray',
    icon: 'lock',
  },
];

function ListingEditScreen() {

  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ 
          title: '', 
          price: '', 
          category: null, 
          description: '',
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          name="images"
        />
        <AppFormField
          maxlength={255}
          name="title"
          placeholder="Title"
          textContentType="none"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          textContentType="none"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          autocorrect={false}
          name="description"
          placeholder="Description"
          textContentType="none"
          numberOfLines={3}
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})

export default ListingEditScreen;