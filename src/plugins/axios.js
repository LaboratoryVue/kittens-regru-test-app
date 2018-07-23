import axios from 'axios';
const URL = 'https://api.unsplash.com/search';

export default axios.create({
  baseURL: URL
});
