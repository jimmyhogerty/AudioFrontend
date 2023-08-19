import { useContext } from "react";
import { UserContext } from "../App";
import { supaClient } from "../db/supa-client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { SEARCHES_QUERY_KEY } from "./useGetSearches";

export const useInsertSearch = () => {
  const { session } = useContext(UserContext);
  const queryClient = useQueryClient();

  return async ({
    keywords,
    sites,
    timeFilter,
  }: {
    keywords: string[];
    sites: string[];
    timeFilter: string;
  }) => {
    if (!session?.user?.id) {
      console.error("No user id found in session");
      return;
    }
    if (!keywords.length) {
      toast.error("Enter keywords before saving search.");
      return;
    }
    if (!sites.length) {
      toast.error("Select sites before saving search.");
      return;
    }

    const { data, error } = await supaClient
      .from("Searches")
      .insert([{ keywords, sites, user_id: session.user.id, timeFilter }])
      .select();

    if (error) {
      console.error("Error inserting search", error);
      return;
    }

    queryClient.invalidateQueries(SEARCHES_QUERY_KEY);
    toast.success("Search saved!");
    return data;
  };
};
