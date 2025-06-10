import type { Category, EffortLevel } from "../../api";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CATEGORIES, EFFORT_LEVELS } from "../../lib/constants";
import { Button } from "../ui/button";
import { Spinner } from "../ui/Spinner";
import { toast } from "sonner";

export type RecipeFormData = {
  name: string;
  category: Category | undefined;
  effortLevel: EffortLevel | undefined;
};

interface RecipeFormProps {
  onSubmit: SubmitHandler<RecipeFormData>;
  buttonText?: string;
  isPending?: boolean;
  defaults?: RecipeFormData;
}

const CreateRecipeForm = ({ onSubmit, buttonText, isPending, defaults }: RecipeFormProps) => {
  const form = useForm<RecipeFormData>({
    defaultValues: defaults ?? { name: "", category: undefined, effortLevel: undefined },
  });

  const onSubmitInternal = (data: RecipeFormData) => {
    if (data.name.trim() === "" || data.category === undefined || data.effortLevel === undefined) {
      toast("Error creating recipe. Please ensure the form is completed.");
      return;
    }
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitInternal)} className="space-y-8 px-2 mx-auto">
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
              <Spinner size="small" color="background" />
            ) : buttonText ? (
              buttonText
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateRecipeForm;
