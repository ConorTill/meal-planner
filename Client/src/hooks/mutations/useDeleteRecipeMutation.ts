import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { getRecipesQueryKey } from "../queries/useGetRecipesQuery";
import { toast } from "sonner";

export function useDeleteRecipeMutation(
  onSuccess?: () => void,
): UseMutationResult<unknown, Error, string> {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/recipes/${id}/delete`, {
        method: "POST",
        headers: { Accept: "application/json" },
      });
      console.log(JSON.stringify(response));
      if (!response.ok) {
        throw new Error("POST delete recipes failed: " + JSON.stringify(response));
      }
      return response;
    },
    onSuccess: () => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: getRecipesQueryKey() });
      toast(`Recipe was successfully deleted.`);
    },
    onError: (error) => {
      toast(`Failed to delete recipe. Error: ${JSON.stringify(error)}`);
    },
  });
}
