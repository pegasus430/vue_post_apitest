import axios from 'axios';


const API_URL = 'https://jsonplaceholder.typicode.com/';
class PostService {
  getAllContent() {
    return axios.get(API_URL + 'posts');
  }

  getSingleContent(id) {
    return axios.get(API_URL + 'posts/'+id);
  }

  postContent(post) {
    return axios.post(API_URL + 'posts', post);
  }

  patchContent(id, post) {
    return axios.patch(API_URL + 'posts/'+id,post);
  }
}

export default new PostService();
