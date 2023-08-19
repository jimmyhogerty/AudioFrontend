import { useContext } from "react";
import { UserContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

export const SEARCHES_QUERY_KEY = ["searches"];

export const useGetSearches = () => {
  const { session } = useContext(UserContext);
  const userId = session?.user.id;
  const searchQuery = useQuery(SEARCHES_QUERY_KEY, () =>
    api.getSearches(userId)
  );
  return { ...searchQuery, data: searchQuery.data };
};
