import { useGetRecipesQuery } from "../../hooks/queries/useGetRecipesQuery";
import { Spinner } from "../ui/Spinner";
import { columns } from "../ui/columns";
import { DataTable } from "../ui/data-table";

const RecipeList = () => {
  const { data, isLoading } = useGetRecipesQuery();
  return (
    <div>
      <Spinner size="large" show={isLoading} />
      {data && data.recipes && <DataTable columns={columns} data={data.recipes} />}
    </div>
  );
};

export default RecipeList;
