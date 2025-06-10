import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import type { CreateRecipeRequest, CreateRecipeResponse } from "../../api";
import { getRecipesQueryKey } from "../queries/useGetRecipesQuery";
import { toast } from "sonner";

export function useCreateRecipeMutation(
  onSuccess?: () => void,
): UseMutationResult<CreateRecipeResponse, Error, CreateRecipeRequest> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: CreateRecipeRequest) => {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("POST create recipes failed: " + JSON.stringify(response));
      }
      return (await response.json()) as CreateRecipeResponse;
    },
    onSuccess: (_response, request) => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: getRecipesQueryKey() });
      toast(`Added ${request.name} to the recipe list.`);
    },
    onError: (error) => {
      toast(`Failed to create recipe. Error: ${JSON.stringify(error)}`);
    },
  });
}
