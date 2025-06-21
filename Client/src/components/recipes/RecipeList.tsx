import { useGetRecipesQuery } from "../../hooks/queries/useGetRecipesQuery";
import { Spinner } from "../ui/Spinner";
import { columns } from "../ui/columns";
import { DataTable } from "../ui/data-table";
import ImportRecipeButton from "./ImportRecipeButton";
import { useState } from "react";
import type { Recipe } from "../../api";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import RecipeDetails from "./RecipeDetails";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const RecipeList = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const openDetailsModal = (data: Recipe) => {
    setRecipe(data);
    setOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        <Spinner size="large" show={isLoading} />
        {data && data.recipes && (
          <DataTable columns={columns} data={data.recipes} onRowClick={openDetailsModal} />
        )}
        <ImportRecipeButton buttonClassName="w-full" />
      </div>
      {recipe && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{recipe.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="">
              <RecipeDetails recipe={recipe} />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default RecipeList;
