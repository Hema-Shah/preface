import env from 'react-native-config';
import {GoogleSignin} from 'react-native-login-google';

export const CONFIG = {
  apiURL: env.API_HOST,
  eventbriteURL: env.EVENTBRITE_HOST,
  eventbriteToken: env.EVENTBRITE_TOKEN,
  eventbriteUserID: env.EVENTBRITE_USERID,
};

export const GoogleConfig = () => {
  GoogleSignin.configure({
    scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '187661395493-5mqoqdiiuakeqmha0fj7qbrqgod3cb68.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });
};