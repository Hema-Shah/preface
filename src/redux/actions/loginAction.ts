import qs from 'qs';
import {IresetData, IforgetData, Ilogindata} from 'screens';
import {client} from '../services';

export async function login(params: Ilogindata) {
  const {logindata}: any = params;
  console.log('Login Data ==>', logindata);
  let data = qs.stringify(logindata);
  return client.post('login', data);
}

export async function signUp(params: Ilogindata) {
  const {signUpData}: any = params;
  console.log('SignUp Data ==>', signUpData);
  let data = qs.stringify(signUpData);
  return client.post('register', data);
}

export async function forgot(params: IforgetData) {
  const {forgotData}: any = params;
  console.log('Forgot Data ==>', forgotData);
  let data = qs.stringify(forgotData);
  return client.post('forgotPassword', data);
}

export async function reset(params: IresetData) {
  const {resetData}: any = params;
  console.log('Forgot Data ==>', resetData);
  let data = qs.stringify(resetData);
  return client.post('resetPassword', data);
}

export async function signOut() {
  return client.post('logout');
}
