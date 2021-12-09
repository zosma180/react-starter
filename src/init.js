import axios from 'axios';

export default async function init() {
  // Load the environment data
  const response = await axios.get('/env.json', { baseURL: '' });
  axios.defaults.baseURL = response.data.apiUrl;
}
