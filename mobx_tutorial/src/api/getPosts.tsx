import axios from "axios";
import { TPost } from "../types";

export const getPosts = async () =>
  (await axios.get<TPost[]>("https://jsonplaceholder.typicode.com/posts")).data;
