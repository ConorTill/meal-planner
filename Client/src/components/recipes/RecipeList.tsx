import { useGetRecipesQuery } from "../../hooks/queries/useGetRecipesQuery";
import { Spinner } from "../ui/Spinner";
import { columns } from "../ui/columns";
import { DataTable } from "../ui/data-table";
import CreateRecipeButton from "./CreateRecipeButton";

const RecipeList = () => {
  const { data, isLoading } = useGetRecipesQuery();
  return (
    <div className="space-y-4">
      <Spinner size="large" show={isLoading} />
      {data && data.recipes && <DataTable columns={columns} data={data.recipes} />}
      <CreateRecipeButton buttonClassName="w-full" />
    </div>
  );
};

export default RecipeList;
