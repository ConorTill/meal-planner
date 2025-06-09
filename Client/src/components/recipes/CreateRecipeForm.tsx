import { useCreateRecipeMutation } from "../../hooks/mutations/useCreateRecipeMutation";
import type { Category, EffortLevel } from "../../api";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CATEGORIES, EFFORT_LEVELS } from "../../lib/constants";
import { Button } from "../ui/button";
import { Spinner } from "../ui/Spinner";
import { toast } from "sonner";

type RecipeFormData = {
  name: string;
  category: Category | undefined;
  effortLevel: EffortLevel | undefined;
};

const CreateRecipeForm = () => {
  const form = useForm<RecipeFormData>({
    defaultValues: { name: "", category: undefined, effortLevel: undefined },
  });
  const { mutate, isPending } = useCreateRecipeMutation(() => form.reset());

  const onSubmit = (data: RecipeFormData) => {
    if (data.name.trim() === "" || data.category === undefined || data.effortLevel === undefined) {
      toast("Error creating recipe. Please ensure the form is completed.");
      return;
    }
    mutate({ name: data.name, category: data.category, effortLevel: data.effortLevel });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name your recipe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="effortLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Effort Level</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick an effort level" />
                  </SelectTrigger>
                  <SelectContent>
                    {EFFORT_LEVELS.map((effortLevel) => (
                      <SelectItem key={effortLevel} value={effortLevel}>
                        {effortLevel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-center">
          <Button type="submit" className="w-36">
            {isPending ? (
              <Spinner size="small" className="text-primary-foreground" />
            ) : (
              "Create Recipe"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateRecipeForm;
