import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { BrowserRouter } from "react-router";
import Router from "./components/Router";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Router />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
