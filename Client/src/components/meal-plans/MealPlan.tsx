import { useGetMealPlansQuery } from "../../hooks/useGetMealPlansQuery";

const MealPlan = () => {
  const { data } = useGetMealPlansQuery();

  if (!data) {
  }

  return <></>;
};

export default MealPlan;
