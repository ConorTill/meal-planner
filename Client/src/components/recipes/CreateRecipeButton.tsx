import { useState } from "react";
import { useCreateRecipeMutation } from "../../hooks/mutations/useCreateRecipeMutation";
import CreateRecipeForm from "./CreateRecipeForm";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface CreateRecipeButtonProps {
  buttonClassName?: string;
}

const CreateRecipeButton = ({ buttonClassName }: CreateRecipeButtonProps) => {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCreateRecipeMutation(() => setOpen(false));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button className={buttonClassName} onClick={() => setOpen(!open)}>
        Create a new recipe
      </Button>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl cursor-default select-none">
            Edit Recipe
          </DialogTitle>
        </DialogHeader>
        <VisuallyHidden>
          <DialogDescription>Complete the form to create a new recipe.</DialogDescription>
        </VisuallyHidden>
        <CreateRecipeForm
          onSubmit={(data) => mutate(data)}
          buttonText="Create Recipe"
          isPending={isPending}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateRecipeButton;
