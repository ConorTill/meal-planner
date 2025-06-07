import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MealPlan from "./components/MealPlan";
import CreateRecipeForm from "./components/CreateRecipeForm";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="fixed top-5 right-5">
          <ModeToggle />
        </div>
        <div className="flex flex-col min-h-full items-center text-center gap-8">
          <h1 className="cursor-default text-center text-4xl font-bold text-balance">Meal Plan</h1>
          <MealPlan />
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Create a new recipe</CardTitle>
            </CardHeader>
            <CardContent>
              <CreateRecipeForm />
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

