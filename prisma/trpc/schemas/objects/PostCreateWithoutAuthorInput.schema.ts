import { z } from 'zod';


export const PostCreateWithoutAuthorInputSchemaObject = {
    createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  title: z.string(),
  content: z.string() ,
  published: z.boolean().optional(),
  viewCount: z.number().optional()
};

export const PostCreateWithoutAuthorInputObjectSchema = z.object({
    createdAt: z.date().optional(),  updatedAt: z.date().optional(),  title: z.string(),  content: z.string() ,  published: z.boolean().optional(),  viewCount: z.number().optional()
});
