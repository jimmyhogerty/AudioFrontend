import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { SEARCHES_QUERY_KEY } from "./useGetSearches";

export const useDeleteSearch = () => {
  const queryClient = useQueryClient();
  return useMutation(async (searchId: number) => api.deleteSearch(searchId), {
    onSuccess: () => {
      queryClient.invalidateQueries(SEARCHES_QUERY_KEY);
      toast.success("Search deleted successfully");
    },
  });
};
