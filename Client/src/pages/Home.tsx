import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import MealPlansTab from "../components/meal-plans/MealPlansTab";
import RecipeTab from "../components/recipes/RecipeTab";
import { ModeToggle } from "../components/ui/mode-toggle";

const Home = () => {
  return (
    <div className="min-w-full min-h-full">
      <div className="w-full py-8 text-center">
        <h1 className="mx-auto text-4xl font-bold">Meal Planner</h1>
        <div className="fixed top-4 right-4">
          <ModeToggle />
        </div>
      </div>
      <Tabs defaultValue="recipes">
        <TabsList className="mx-auto flex">
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="meal-plans">Meal Plans</TabsTrigger>
          <TabsTrigger value="shopping">Shopping</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>
        <TabsContent value="recipes">
          <RecipeTab />
        </TabsContent>
        <TabsContent value="meal-plans">
          <MealPlansTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
