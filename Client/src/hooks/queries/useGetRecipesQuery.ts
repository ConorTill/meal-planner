import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { GetRecipesResponse } from "../../api";

export function getRecipesQueryKey() {
  return ["Recipes"];
}

export function useGetRecipesQuery(): UseQueryResult<GetRecipesResponse> {
  return useQuery({
    queryKey: getRecipesQueryKey(),
    queryFn: async () => {
      const response = await fetch("/api/recipes");

      if (!response.ok) {
        throw new Error("GET recipes failed: " + JSON.stringify(response));
      }

      return (await response.json()) as GetRecipesResponse;
    },
  });
}
