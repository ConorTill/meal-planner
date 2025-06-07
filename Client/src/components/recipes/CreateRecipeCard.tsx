import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import CreateRecipeForm from "./CreateRecipeForm";

const CreateRecipeCard = () => {
  return (
    <Card className="w-2xs">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Create a new recipe</CardTitle>
      </CardHeader>
      <CardContent>
        <CreateRecipeForm />
      </CardContent>
    </Card>
  );
};

export default CreateRecipeCard;
