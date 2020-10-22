import React, { useState, useEffect } from 'react';
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
import listingsApi from '../api/listings';
import categoriesApi from '../api/categories';
import UploadScreen from './UploadScreen';
import useApi from '../hooks/useApi';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().nullable().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

function ListingEditScreen({ navigation }) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    getCategoriesApi.request();
  }, []);

  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      {...listing, location},
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.');
    }
    
    resetForm();
    navigation.navigate(routes.ACCOUNT, { screen: routes.MY_LISTINGS});
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
      <AppForm
        initialValues={{ 
          title: '', 
          price: '', 
          category: null, 
          description: '',
          images: []
        }}
        onSubmit={handleSubmit}
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
          // icon='label'
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          textContentType="none"
          width={120}
          // icon='price'
        />
        <AppFormPicker
          items={getCategoriesApi.data}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
          // icon="grid"
        />
        <AppFormField
          autocorrect={false}
          name="description"
          placeholder="Description"
          textContentType="none"
          numberOfLines={3}
          // icon="text"
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