import RecipeList from "./RecipeList";

const RecipeTab = () => {
  return (
    <div className="flex flex-col items-center gap-4 min-h-full min-w-full">
      <RecipeList />
    </div>
  );
};

export default RecipeTab;
