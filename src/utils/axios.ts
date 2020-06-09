import Axios, { AxiosResponse } from 'axios';
import cookie from 'react-cookies';
import baseUrl from '../../base-url';

const token: string = cookie.load('userToken');
const instance = Axios.create({
  baseURL: baseUrl,
  timeout: 1000000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${token}`,
  },
});

interface ResponseData {
  data: any;
  errorCode: number;
  msg: string;
}

instance.interceptors.response.use((response: AxiosResponse<ResponseData>) => {
  if (response.status !== 200) {
    throw new Error('服务端开小差啦');
  }

  const { data, errorCode, msg } = response.data;
  if (errorCode !== 2000) {
    throw new Error(msg || '服务端开小差啦');
  }

  return data;
});

const axios = instance;

export default axios;
