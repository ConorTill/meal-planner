import { useState } from "react";
import { Button } from "../ui/button";
import EditIcon from "../../assets/icons/EditIcon";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import CreateRecipeForm from "./CreateRecipeForm";
import { useEditRecipeMutation } from "../../hooks/mutations/useEditRecipeMutation";
import type { Recipe } from "../../api";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface EditRecipeButtonProps {
  recipe: Recipe;
}

const EditRecipeButton = ({ recipe }: EditRecipeButtonProps) => {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useEditRecipeMutation(recipe.id, () => setOpen(false));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(!open)} variant="ghost" size="icon">
        <EditIcon />
      </Button>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl cursor-default select-none">
            Edit Recipe
          </DialogTitle>
        </DialogHeader>
        <VisuallyHidden>
          <DialogDescription>Complete the form to update the selected recipe.</DialogDescription>
        </VisuallyHidden>
        <CreateRecipeForm
          onSubmit={(data) => mutate(data)}
          buttonText="Update Recipe"
          isPending={isPending}
          defaults={{
            name: recipe.name ?? "",
            category: recipe.category,
            effortLevel: recipe.effortLevel,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditRecipeButton;
