import axios from 'axios';
// const URL = 'https://api.unsplash.com';
const URL = 'https://api.unsplash.com/search';
// const URL = 'https://api.unsplash.com/search/photos';

export default axios.create({
  baseURL: URL
});
