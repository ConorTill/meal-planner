import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { getRecipesQueryKey } from "../queries/useGetRecipesQuery";
import { toast } from "sonner";
import type { ImportRecipeRequest, ImportRecipeResponse } from "../../api";

export function useImportRecipeMutation(
  onSuccess?: () => void,
): UseMutationResult<ImportRecipeResponse, Error, ImportRecipeRequest> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: ImportRecipeRequest) => {
      const response = await fetch("/api/recipes/import", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("POST import recipe failed: " + JSON.stringify(response));
      }
      return (await response.json()) as ImportRecipeResponse;
    },
    onSuccess: (_response, _request) => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: getRecipesQueryKey() });
      toast(`Added a new recipe to the recipe list.`);
    },
    onError: (error) => {
      toast(`Failed to create recipe. Error: ${JSON.stringify(error)}`);
    },
  });
}
