import { useState, type FormEvent } from "react";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import { useDeleteRecipeMutation } from "../../hooks/mutations/useDeleteRecipeMutation";
import { Spinner } from "../ui/Spinner";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface DeleteRecipeButtonProps {
  id: string;
}

const DeleteRecipeButton = ({ id }: DeleteRecipeButtonProps) => {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useDeleteRecipeMutation(() => setOpen(false));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(id);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        variant="ghost"
        size="icon"
      >
        <DeleteIcon />
      </Button>
      <DialogContent onClick={(e) => e.stopPropagation()} className="w-fit">
        <DialogHeader>
          <DialogTitle>Delete Recipe</DialogTitle>
          <DialogDescription className="text-center">
            Are you sure you want to delete this recipe?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogFooter>
            <Button type="submit">
              {isPending ? <Spinner size="small" color="background" /> : "Delete"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteRecipeButton;
