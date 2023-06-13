import useSWR from "swr";

import { fetcher } from "@src/utils";
import { API_COMMENTS_URL } from "@src/utils/constants";
import { CommentObject } from "@src/types/comment";

const useFetchComments = () => {
   const { data, isLoading, error, mutate } = useSWR<CommentObject[], Error>(
      API_COMMENTS_URL,
      fetcher
   );

   return {
      comments: data,
      isLoading,
      error,
      mutate,
   };
};

export default useFetchComments;
