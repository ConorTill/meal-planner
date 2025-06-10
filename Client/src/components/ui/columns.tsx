import { type ColumnDef } from "@tanstack/react-table";
import type { Recipe } from "../../api";
import DeleteRecipeButton from "../recipes/DeleteRecipeButton";
import EditRecipeButton from "../recipes/EditRecipeButton";

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "effortLevel",
    header: "Effort Level",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const recipe = row.original;

      return (
        <>
          <EditRecipeButton recipe={row.original} />
          <DeleteRecipeButton id={recipe.id} />
        </>
      );
    },
  },
];
