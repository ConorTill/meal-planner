import { type ColumnDef } from "@tanstack/react-table";
import type { Recipe } from "../../api";
import DeleteRecipeButton from "../recipes/DeleteRecipeButton";

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "cuisine",
    header: "Cuisine",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const recipe = row.original;

      return (
        <>
          {/* <EditRecipeButton recipe={row.original} /> */}
          <DeleteRecipeButton id={recipe.id} />
        </>
      );
    },
  },
];
