// import { makeAutoObservable, runInAction } from "mobx";
// import { TPost } from "../types";
// import { getPosts } from "../api/getPosts";
// import { IPromiseBasedObservable } from "mobx-utils";

// class PostsStore {
//   posts: TPost[] = [];
//   isLoading = false;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   getPostsAction = async () => {
//     try {
//       // Будет много перерисовок на каждое изменение
//       this.isLoading = true;

//       const res = await getPosts();
//       //   this.posts = res;
//       //   this.isLoading = false;

//       // Поэтому можно использовать ф-ию runInAction
//       runInAction(() => {
//         this.posts = res;
//         this.isLoading = false;
//       });
//     } catch (error) {
//       console.log(error);
//       this.isLoading = false;
//     }
//   };
// }

// export default new PostsStore();

import { makeAutoObservable } from "mobx";
import { TPost } from "../types";
import { getPosts } from "../api/getPosts";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class PostsStore {
  posts?: IPromiseBasedObservable<TPost[]>;
  constructor() {
    makeAutoObservable(this);
  }

  getPostsAction = () => {
    this.posts = fromPromise(getPosts());
  };
}

export default new PostsStore();
