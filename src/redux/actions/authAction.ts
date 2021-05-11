import axios from 'axios';
import {IDeepLinkData} from 'navigators';
import qs from 'qs';
import {IresetData, IforgetData, Ilogindata} from 'screens';
import {client} from '../services';

export async function login(params: Ilogindata) {
  const {logindata}: any = params;
  let data = qs.stringify(logindata);
  return client.post('login', data);
}

export async function signUp(params: Ilogindata) {
  const {signUpData}: any = params;
  let data = qs.stringify(signUpData);
  return client.post('register', data);
}

export async function forgot(params: IforgetData) {
  const {forgotData}: any = params;
  let data = qs.stringify(forgotData);
  return client.post('forgotPassword', data);
}

export async function reset(params: IresetData) {
  const {resetData}: any = params;
  let data = qs.stringify(resetData);
  return client.post('updateForgotPassword', data);
}

export async function checkForgot(params: IDeepLinkData) {
  const {url}: any = params;
  return axios.get(url);
}

export async function signOut(accessToken: any) {
  let data = '';
  return client.post('logout',data,{
    headers: {'Authorization': `Bearer ${accessToken}`},
  });
}
