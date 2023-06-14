import { useMemo } from "react";
import useSWRInfinite from "swr/infinite";

import { fetcher } from "@src/utils";
import { API_POST_URL } from "@src/utils/constants";
import { PostObject } from "@src/types/post";

const getKey = (pageIndex: number, previousPageData: any) => {
   if (previousPageData && !previousPageData.length) return null; // reached the end
   return `${API_POST_URL}?page=${pageIndex + 1}`; // SWR key
};

const useFetchPosts = () => {
   const { data, error, mutate, isLoading, size, setSize } = useSWRInfinite<PostObject[], Error>(
      getKey,
      fetcher
   );

   const paginationPosts = useMemo(() => data && data.flat(), [data]);

   const isReachedEnd = useMemo(() => data && data[data.length - 1].length < 5, [data]); // got a last batch of data
   //const isLastContent = useMemo(() => data && typeof data[size - 1] === "undefined", [data, size]);

   return {
      posts: paginationPosts,
      isLoading,
      error,
      mutatePosts: mutate,
      size,
      setSize,
      isReachedEnd,
   };
};

export default useFetchPosts;
