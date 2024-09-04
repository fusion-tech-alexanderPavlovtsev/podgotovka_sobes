import { observer } from "mobx-react-lite";
import CounterStore from "../../store/counter-store";
import postsStore from "../../store/posts-store";
import { useEffect } from "react";
import { spy } from "mobx";

const counter1 = new CounterStore();
const counter2 = new CounterStore();

spy((ev) => {
  if (ev.type === "action") {
    console.log(ev);
  }
});
// export const Wrapper = observer(() => {
//   const { getPostsAction, posts, isLoading } = postsStore;

//   useEffect(() => {
//     getPostsAction();
//   }, []);

//   if (posts?.state === "pending") {
//     return <div>Loading...</div>;
//   }

//   if (posts?.state === "rejected") {
//     return <div>Error</div>;
//   }

//   console.log(posts, "posts");

//   //   return (
//   //     <>
//   //       <Counter {...counter1} total={counter1.total} />
//   //       <br />
//   //       <Counter {...counter2} total={counter2.total} />
//   //     </>
//   //   );

//   return <>{posts?.value[0].body}</>;
// });

export const Wrapper = observer(() => {
  const { getPostsAction, posts, isLoading } = postsStore;

  useEffect(() => {
    getPostsAction();
  }, []);

  if (!posts) {
    return null;
  }

  return posts.case({
    pending: () => <div>Loading...</div>,
    rejected: () => <div>Error</div>,
    fulfilled: (values) => (
      //   <ul>
      //     {values.map((todo, i) => {
      //       return <li key={i}>{todo.title}</li>;
      //     })}
      //   </ul>
      <div>{values[0].body}</div>
    ),
  });
});
