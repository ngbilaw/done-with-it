import * as Updates from 'expo-updates';

const settings = {
  dev: {
    apiUrl: 'http://192.168.8.101:9000/api',
    // apiUrl: 'https://done-with-it-api.herokuapp.com/api',
    IOS_CLIENT_ID: '781063018754-ssu55g115v4j7i51qeafsoskfssp1g3j.apps.googleusercontent.com'
  },
  staging: {
    apiUrl: 'https://done-with-it-api.herokuapp.com/api',
    IOS_CLIENT_ID: '781063018754-ssu55g115v4j7i51qeafsoskfssp1g3j.apps.googleusercontent.com'
  },
  prod: {
    apiUrl: 'https://done-with-it-api.herokuapp.com/api',
    IOS_CLIENT_ID: '781063018754-ssu55g115v4j7i51qeafsoskfssp1g3j.apps.googleusercontent.com'
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Updates.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
