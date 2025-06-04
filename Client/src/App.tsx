import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MealPlan from "./components/MealPlan";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-full text-center gap-8">
        <h1>Meal Plan</h1>
        <MealPlan />
      </div>
    </QueryClientProvider>
  );
}

export default App;

