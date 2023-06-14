import useSWR from "swr";

import { fetcher } from "@src/utils";
import { API_COMMENTS_URL } from "@src/utils/constants";
import { CommentObject } from "@src/types/comment";

const useFetchComments = (postId: string) => {
   const { data, isLoading, error, mutate } = useSWR<CommentObject[], Error>(
      `${API_COMMENTS_URL}?id=${postId}`,
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
