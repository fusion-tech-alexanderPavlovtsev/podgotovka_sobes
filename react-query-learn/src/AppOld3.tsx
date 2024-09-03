import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

const isAuth = false;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   return response.json();
// };

const getData = async () => {
  return axios.get<unknown, AxiosResponse<Post[]>>(
    "https://jsonplaceholder.typicode.com/posts"
  );
};

function App() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getData,
    select: (data) => data.data,
    enabled: isAuth,
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      <h1>Reqct query</h1>
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
