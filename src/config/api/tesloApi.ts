import axios from "axios";
import { Platform } from "react-native";
import { STAGE, API_URL, API_URL_IOS, API_URL_ANDROID } from '@env';

const ENDPOINT = 
   ( STAGE === 'production' ) ? 
   API_URL :
   Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID

const tesloApi = axios.create({
   baseURL: ENDPOINT,
   headers: {
      'Content-Type': 'application/json',
   }
})

export {
   ENDPOINT,
   tesloApi
}