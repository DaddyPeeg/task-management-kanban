"use client";

import { create } from "@/actions/create-boards";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

const Form = () => {
  const initialState = { message: null, errors: {} };
  //@ts-ignore
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board Title"
        className="border-black border p-1"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
