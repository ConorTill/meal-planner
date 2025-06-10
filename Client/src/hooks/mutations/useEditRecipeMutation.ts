import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { getRecipesQueryKey } from "../queries/useGetRecipesQuery";
import { toast } from "sonner";
import type { UpdateRecipeRequest } from "../../api";

export function useEditRecipeMutation(
  id: string,
  onSuccess?: () => void,
): UseMutationResult<unknown, Error, UpdateRecipeRequest> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: UpdateRecipeRequest) => {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("PUT update recipes failed: " + JSON.stringify(response));
      }
      return response;
    },
    onSuccess: () => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: getRecipesQueryKey() });
      toast(`Recipe successfully updated.`);
    },
    onError: (error) => {
      toast(`Failed to update recipe. Error: ${JSON.stringify(error)}`);
    },
  });
}
