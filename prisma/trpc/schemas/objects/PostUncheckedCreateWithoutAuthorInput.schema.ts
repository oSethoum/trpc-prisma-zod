import { z } from 'zod';


export const PostUncheckedCreateWithoutAuthorInputSchemaObject = {
    id: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  title: z.string(),
  content: z.string() ,
  published: z.boolean().optional(),
  viewCount: z.number().optional()
};

export const PostUncheckedCreateWithoutAuthorInputObjectSchema = z.object({
    id: z.number().optional(),  createdAt: z.date().optional(),  updatedAt: z.date().optional(),  title: z.string(),  content: z.string() ,  published: z.boolean().optional(),  viewCount: z.number().optional()
});
