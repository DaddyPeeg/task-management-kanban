import { deleteBoard } from "@/actions/delete.board";
import { Button } from "@/components/ui/button";

interface BoardProps {
  title: string;
  id: string;
}

const DeleteBoard = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board Title: {title}</p>
      <Button type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    </form>
  );
};

export default DeleteBoard;
