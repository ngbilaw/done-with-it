import Constants from 'expo-constants';

const settings = {
  dev: {
    // apiUrl: 'http://192.168.1.13:9000/api'
    apiUrl: 'https://done-with-it-api.herokuapp.com/api',
    IOS_CLIENT_ID: '781063018754-ssu55g115v4j7i51qeafsoskfssp1g3j.apps.googleusercontent.com'
  },
  staging: {
    apiUrl: 'https://done-with-it-api.herokuapp.com/api'
  },
  prod: {
    apiUrl: 'https://done-with-it-api.herokuapp.com/api'
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
