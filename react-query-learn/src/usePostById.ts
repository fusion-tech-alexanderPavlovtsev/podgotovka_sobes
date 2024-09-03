import { useQuery } from "@tanstack/react-query";
import { postService } from "./post.service";

// const getData = (id: number) => {
//   return axios.get<unknown, AxiosResponse<TPost>>(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
// };

type Props = {
  id: number;
};

export function usePostById({ id }: Props) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["post", id],
    // queryFn: () => getData(id),
    queryFn: () => postService.getPostById(id),
    select: (data) => data.data,
    enabled: !!id,
  });

  refetch();

  return { post: data, isPostLoading: isLoading };
}
