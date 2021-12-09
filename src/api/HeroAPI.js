import axios from 'axios';

export async function getHeroListAPI() {
  const { data } = await axios.get('hero');
  return data;
}

export async function addHeroAPI(model) {
  const { data } = await axios.post('hero', model);
  return data;
}

export async function updateHeroAPI(model) {
  const { data } = await axios.put(`hero/${model.id}`, model);
  return data;
}

export async function deleteHeroAPI(id) {
  const { data } = axios.delete(`hero/${id}`);
  return data;
}
