import { useForm, type SubmitHandler } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/Spinner";
import { toast } from "sonner";

export type ImportRecipeFormData = {
  url: string;
};

interface ImportRecipeFormProps {
  onSubmit: SubmitHandler<ImportRecipeFormData>;
  isPending?: boolean;
}

const ImportRecipeForm = ({ onSubmit, isPending }: ImportRecipeFormProps) => {
  const form = useForm<ImportRecipeFormData>();

  const onSubmitInternal = (data: ImportRecipeFormData) => {
    if (data.url.trim() === "") {
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
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter your recipe URL here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-center">
          <Button type="submit" className="w-36">
            {isPending ? <Spinner size="small" color="background" /> : "Import Recipe"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ImportRecipeForm;
