import { useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { usePostById } from "./usePostById";
import { usePosts } from "./usePosts";
import { useAddPost } from "./useAddPost";

const isAuth = true;

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   return response.json();
// };

// const getData = async () => {
//   return axios.get<unknown, AxiosResponse<Post[]>>(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
// };

function App() {
  const { post } = usePostById({ id: 1 });
  const { isLoading, data } = usePosts({ isEnabled: isAuth });

  // const { mutate, isPending } = useMutation({
  //   mutationKey: ["add post"],
  //   mutationFn: async (newPost: Omit<TPost, "id">) =>
  //     axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
  //   onSuccess: () => {
  //     console.log("Mutation success");
  //     queryClient.invalidateQueries({ queryKey: ["posts"] });
  //   },
  // });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useAddPost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If something fetching
  // const isFetching = useIsFetching();

  // If there is some mutation occured
  // const isMutating = useIsMutating();

  // return (
  //   <>
  //     <h1>Reqct query</h1>
  //     {data?.length ? (
  //       data?.map((post) => {
  //         return <div>{post.title}</div>;
  //       })
  //     ) : (
  //       <div>No data</div>
  //     )}
  //   </>
  // );
  return (
    <>
      {post?.id}
      <h1>Reqct query</h1>
      <button
        onClick={() => {
          mutate({ body: "New body", title: "New title", userId: 1 });
        }}
      >
        Create
      </button>
      {isPending ? <div>Post is creating...</div> : null}
      <button
        onClick={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}
      >
        Invalidate
      </button>
      {data?.length ? (
        data?.map((post) => {
          return <div>{post.title}</div>;
        })
      ) : (
        <div>No data</div>
      )}
    </>
  );
}

export default App;
