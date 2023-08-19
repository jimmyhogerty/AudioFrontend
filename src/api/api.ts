import { supaClient } from "../db/supa-client";

export const api = {
  async getSearches(userId: string | undefined) {
    if (!userId) return [];
    const { data: keywords } = await supaClient
      .from("Searches")
      .select("*")
      .eq("user_id", userId);
    return keywords;
  },
  async getWebsites(userId: string | undefined) {
    if (!userId) return [];
    const { data: websites } = await supaClient
      .from("savedSites")
      .select("*")
      .eq("user_id", userId);
    return websites;
  },
  async deleteSearch(searchId: number) {
    const { data: deletedSearch } = await supaClient
      .from("Searches")
      .delete()
      .eq("id", searchId);
    return deletedSearch;
  },
  async deleteWebsite(websiteId: number) {
    const { data: deletedWebsite } = await supaClient
      .from("savedSites")
      .delete()
      .eq("id", websiteId);
    return deletedWebsite;
  },
};
