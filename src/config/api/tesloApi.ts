import axios, { InternalAxiosRequestConfig } from "axios";
import { Platform } from "react-native";
import { STAGE, API_URL, API_URL_IOS, API_URL_ANDROID } from '@env';
import { StorageAdapter } from "../adapters/async-storage";

const ENDPOINT = ( STAGE === 'production' ) ?  API_URL : Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID

const tesloApi = axios.create({
   baseURL: ENDPOINT,
   headers: {
      'Content-Type': 'application/json',
   }
})

tesloApi.interceptors.request.use(
   async ( config: InternalAxiosRequestConfig<any> ) => {

      const token = await StorageAdapter.getItem("token");

      if ( token ) {
         config.headers['Authorization'] = `Bearer ${ token }`
      }

      return config
   }
)



export {
   ENDPOINT,
   tesloApi
}