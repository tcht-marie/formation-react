import * as z from "zod";

const ContratSchema = z.object({
  title: z.enum(["Habitation", "VAM", "Santé"]),
  username: z.string().min(1).max(33),
  description: z.string().min(1).max(255),
});

export type ContratSchemaType = z.infer<typeof ContratSchema>;

export { ContratSchema };
