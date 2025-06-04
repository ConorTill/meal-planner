import type { JSX, PropsWithChildren, ReactElement } from "react";
import { useGetMealPlansQuery } from "../hooks/useGetMealPlansQuery";
import { twMerge } from "tailwind-merge";

const WeatherComponent = () => {
  const { data, isFetching, isPending } = useGetMealPlansQuery();

  if (!data) {
  }

  return (
    <div className="flex justify-center items-center border-2 border-zinc-500 rounded-lg">
      <table className="p-4 table-auto">
        <thead>
          <TableRow className="border-b-2 border-b-zinc-500">
            <TableRowHeaderItem>Day</TableRowHeaderItem>
            <TableRowHeaderItem>Recipe</TableRowHeaderItem>
            <TableRowHeaderItem>Category</TableRowHeaderItem>
            <TableRowHeaderItem>Effort Level</TableRowHeaderItem>
          </TableRow>
        </thead>
        <tbody className="divide-zinc-500">
          {data?.mealPlanItems &&
            data.mealPlanItems.map((item) => {
              return (
                <TableRow key={item.date} className="transition-all duration-150 hover:bg-zinc-700">
                  <TableRowItem>
                    {new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
                      new Date(item.date),
                    )}
                  </TableRowItem>
                  <TableRowItem>{item.recipe.name}</TableRowItem>
                  <TableRowItem>{item.recipe.category}</TableRowItem>
                  <TableRowItem>{item.recipe.effortLevel}</TableRowItem>
                </TableRow>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({
  key,
  children,
  className,
}: PropsWithChildren & { key?: string; className?: string }) => {
  return (
    <tr key={key} className={twMerge("cursor-default divide-x-2 divide-zinc-500", className)}>
      {children}
    </tr>
  );
};

const TableRowItem = ({
  key,
  children,
  className,
}: PropsWithChildren & { key?: string; className?: string }) => {
  return (
    <td key={key} className={twMerge("py-2 px-4 text-center", className)}>
      {children}
    </td>
  );
};

const TableRowHeaderItem = ({ key, children }: PropsWithChildren & { key?: string }) => {
  return (
    <th key={key} className="py-2 px-4 text-center">
      {children}
    </th>
  );
};

export default WeatherComponent;
