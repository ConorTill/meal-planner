import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import type { CreateRecipeRequest, CreateRecipeResponse } from "../../api";
import { getRecipesQueryKey } from "../queries/useGetRecipesQuery";

export function useCreateRecipeMutation(): UseMutationResult<
  CreateRecipeResponse,
  Error,
  CreateRecipeRequest
> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: CreateRecipeRequest) => {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("POST recipes failed: " + JSON.stringify(response));
      }
      return (await response.json()) as CreateRecipeResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getRecipesQueryKey() });
    },
  });
}
