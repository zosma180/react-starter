import axios from 'axios';

export async function loginAPI(body) {
  const { data } = await axios.post('login', body);
  return data;
}

export async function logoutAPI() {
  const { data } = await axios.post('logout');
  return data;
}
