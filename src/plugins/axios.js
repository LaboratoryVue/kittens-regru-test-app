import axios from 'axios';
const URL = 'http://placekitten.com/400/400?image=10';

export default axios.create({
  baseURL: URL
});
