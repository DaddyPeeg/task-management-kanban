"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minimum length of 3 letters is required",
  }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = validatedFields.data;
  try {
    await db.board.create({
      //@ts-ignore
      data: {
        title,
      },
    });
  } catch (e: any) {
    return {
      message: "Database Error",
    };
  }

  revalidatePath("/organization/org_2clOMKAoOTg8KbzHuHe3kbBd78y");
  redirect("/organization/org_2clOMKAoOTg8KbzHuHe3kbBd78y");
}
