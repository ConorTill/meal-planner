import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useImportRecipeMutation } from "../../hooks/mutations/useImportRecipeMutation";
import ImportRecipeForm from "./ImportRecipeForm";

interface ImportRecipeButtonProps {
  buttonClassName?: string;
}

const ImportRecipeButton = ({ buttonClassName }: ImportRecipeButtonProps) => {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useImportRecipeMutation(() => setOpen(false));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button className={buttonClassName} onClick={() => setOpen(!open)}>
        Import a recipe
      </Button>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl cursor-default select-none">
            Import Recipe
          </DialogTitle>
        </DialogHeader>
        <VisuallyHidden>
          <DialogDescription>Import a recipe from a URL.</DialogDescription>
        </VisuallyHidden>
        <ImportRecipeForm onSubmit={(data) => mutate(data)} isPending={isPending} />
      </DialogContent>
    </Dialog>
  );
};

export default ImportRecipeButton;
