import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TPost } from "./post.types";
import { postService } from "./post.service";

export function useAddPost() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["add post"],
    // mutationFn: async (newPost: Omit<TPost, "id">) =>
    //   axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
    mutationFn: (newPost: Omit<TPost, "id">) => postService.addPost(newPost),
    onSuccess: () => {
      console.log("Mutation success");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { mutate, isPending };
}
