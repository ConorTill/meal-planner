import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { GetMealPlanResponse } from "../api";

export function mealPlansQueryKey() {
  return ["MealPlans"];
}

export function useGetMealPlansQuery(): UseQueryResult<GetMealPlanResponse> {
  return useQuery({
    queryKey: mealPlansQueryKey(),
    queryFn: async () => {
      const response = await fetch('/api/meal-plans');

      if (!response.ok) {
        throw new Error("GET meal plans failed: " + JSON.stringify(response));
      }

      return await response.json() as GetMealPlanResponse;
    }
  });
}