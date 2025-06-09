import { type ColumnDef } from "@tanstack/react-table";
import type { Recipe } from "../../api";

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
];
