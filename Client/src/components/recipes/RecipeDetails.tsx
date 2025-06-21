import { useState } from "react";
import type { Recipe } from "../../api";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Separator } from "../ui/separator";
import ChevronDownIconMini from "../../assets/icons/ChevronDownIconMini";
import ChevronUpIconMini from "../../assets/icons/ChevronUpIconMini";

interface RecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  const [openElements, setOpenElements] = useState<string[]>([]);

  const isOpen = (name: string) => {
    return openElements.some((element) => element === name);
  };

  const toggleOpen = (name: string) => {
    return (shouldOpen: boolean) =>
      shouldOpen
        ? setOpenElements(
            openElements.some((element) => element === name)
              ? openElements
              : openElements.concat(name),
          )
        : setOpenElements(openElements.filter((element) => element !== name));
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between space-x-2 cursor-default select-none">
        <div className="rounded-sm w-full bg-accent p-2 text-center">
          <p>Preparation time</p>
          <p className="text-lg font-semibold">{recipe.preparationTime} min</p>
        </div>
        <div className="rounded-sm w-full bg-accent p-2 text-center">
          <p>Cooking time</p>
          <p className="text-lg font-semibold">{recipe.cookingTime} min</p>
        </div>
        <div className="rounded-sm w-full bg-accent p-2 text-center">
          <p>Calories</p>
          <p className="text-lg font-semibold">
            {recipe.nutrition?.calories} {recipe.nutrition?.caloriesUnit}
          </p>
        </div>
      </div>
      <div className="rounded-sm bg-accent p-4 text-center">
        <p>{recipe.description}</p>
      </div>
      {recipe.nutrition && (
        <Collapsible
          open={isOpen("nutrition")}
          onOpenChange={toggleOpen("nutrition")}
          className="rounded-sm bg-accent p-4 text-center"
        >
          <CollapsibleTrigger>
            <div className="flex h-8 items-center gap-2">
              <h3 className="text-xl font-semibold">Nutrition</h3>
              {isOpen("nutrition") ? <ChevronDownIconMini /> : <ChevronUpIconMini />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2">
              <div>
                <Separator className="my-4" />
                <p>
                  Calories: {recipe.nutrition.calories} {recipe.nutrition.caloriesUnit}
                </p>
              </div>
              <div>
                <Separator className="my-4" />
                <p>
                  Carbohydrates: {recipe.nutrition.carbohydrates}{" "}
                  {recipe.nutrition.carbohydratesUnit}
                </p>
              </div>
              <div>
                <Separator className="my-4" />
                <p>
                  Fat: {recipe.nutrition.fat} {recipe.nutrition.fatUnit}
                </p>
              </div>
              <div>
                <Separator className="my-4" />
                <p>
                  Saturated Fat: {recipe.nutrition.saturatedFat} {recipe.nutrition.saturatedFatUnit}
                </p>
              </div>
              <div>
                <Separator className="my-4" />
                <p>
                  Fibre: {recipe.nutrition.fibre} {recipe.nutrition.fibreUnit}
                </p>
              </div>
              <div>
                <Separator className="my-4" />
                <p>
                  Salt: {recipe.nutrition.salt} {recipe.nutrition.saltUnit}
                </p>
              </div>
              <div>
                <Separator className="my-4" />
                <p>
                  Sugars: {recipe.nutrition.sugars} {recipe.nutrition.sugarsUnit}
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
      <Collapsible
        open={isOpen("ingredients")}
        onOpenChange={toggleOpen("ingredients")}
        className="rounded-sm bg-accent p-4 text-center"
      >
        <CollapsibleTrigger>
          <div className="flex h-8 items-center gap-2">
            <h3 className="text-xl font-semibold">Ingredients</h3>
            {isOpen("ingredients") ? <ChevronDownIconMini /> : <ChevronUpIconMini />}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-1 mt-4">
            {recipe.ingredients?.map((ingredient, idx) => {
              return (
                <div key={idx}>
                  <p>
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                    {ingredient.note && `, ${ingredient.note}`}
                  </p>
                </div>
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen("instructions")}
        onOpenChange={toggleOpen("instructions")}
        className="rounded-sm bg-accent p-4 text-center"
      >
        <CollapsibleTrigger>
          <div className="flex h-8 items-center gap-2">
            <h3 className="text-xl font-semibold">Instructions</h3>
            {isOpen("instructions") ? <ChevronDownIconMini /> : <ChevronUpIconMini />}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-1">
            {recipe.instructions?.map((instruction, idx) => {
              return (
                <div key={idx}>
                  <Separator className="my-4" />
                  <h4 className="text-lg font-semibold">Step {idx + 1}</h4>
                  <p>{instruction}</p>
                </div>
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default RecipeDetails;
