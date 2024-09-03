import axios, { AxiosResponse } from "axios";
import { TPost } from "./post.types";

class PostService {
  private URL = "https://jsonplaceholder.typicode.com/posts";
  getPosts() {
    return axios.get<unknown, AxiosResponse<TPost[]>>(this.URL);
  }

  getPostById(id: number) {
    return axios.get<unknown, AxiosResponse<TPost>>(`${this.URL}/${id}`);
  }

  addPost(newPost: Omit<TPost, "id">) {
    return axios.post(this.URL, newPost);
  }
}

export const postService = new PostService();
