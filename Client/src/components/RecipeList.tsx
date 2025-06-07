import { useGetRecipesQuery } from "../hooks/queries/useGetRecipesQuery";
import { Spinner } from "./ui/Spinner";

const RecipeList = () => {
  const { data, isLoading } = useGetRecipesQuery();
  return (
    <>
      <Spinner size="large" show={isLoading} />
      {data && data.recipes?.map((recipe) => <p key={recipe.name}>{recipe.name}</p>)}
    </>
  );
};

export default RecipeList;
