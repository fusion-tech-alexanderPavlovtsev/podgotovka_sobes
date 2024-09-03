import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { postService } from "./post.service";

// const getData = async () => {
//   return axios.get<unknown, AxiosResponse<TPost[]>>(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
// };

type Props = {
  isEnabled: boolean;
};

const initialData = {
  data: [
    {
      body: "Initial body",
      id: 0,
      title: "Initial title",
    },
  ],
};

export function usePosts({ isEnabled }: Props) {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    // queryFn: getData,
    queryFn: postService.getPosts,
    select: (data) => data.data,
    enabled: isEnabled,
    initialData,
    // revalidate time
    // staleTime: 1000,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("Data fetched successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("Error fetching data");
    }
  }, [isError]);

  return { data, isLoading };
}
