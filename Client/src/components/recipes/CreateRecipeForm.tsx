import { useForm, type SubmitHandler } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { COURSE, DIFFICULTY } from "../../lib/constants";
import { Button } from "../ui/button";
import { Spinner } from "../ui/Spinner";
import { toast } from "sonner";
import type { Course, Difficulty } from "../../api";

export type RecipeFormData = {
  title: string;
  course: Course | undefined;
  difficulty: Difficulty | undefined;
};

interface RecipeFormProps {
  onSubmit: SubmitHandler<RecipeFormData>;
  buttonText?: string;
  isPending?: boolean;
  defaults?: RecipeFormData;
}

const CreateRecipeForm = ({ onSubmit, buttonText, isPending, defaults }: RecipeFormProps) => {
  const form = useForm<RecipeFormData>({
    defaultValues: defaults ?? { title: "", course: undefined, difficulty: undefined },
  });

  const onSubmitInternal = (data: RecipeFormData) => {
    if (data.title.trim() === "" || data.course === undefined || data.difficulty === undefined) {
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Name your recipe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
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
          name="difficulty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Effort Level</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {DIFFICULTY.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty}
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
