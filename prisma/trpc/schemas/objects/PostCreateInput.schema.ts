import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputSchemaObject } from './UserCreateNestedOneWithoutPostsInput.schema';;
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';

export const PostCreateInputSchemaObject = {
    createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  title: z.string(),
  content: z.string() ,
  published: z.boolean().optional(),
  viewCount: z.number().optional(),
  author: z.object(UserCreateNestedOneWithoutPostsInputSchemaObject)
};

export const PostCreateInputObjectSchema = z.object({
    createdAt: z.date().optional(),  updatedAt: z.date().optional(),  title: z.string(),  content: z.string() ,  published: z.boolean().optional(),  viewCount: z.number().optional(),  author: z.object(UserCreateNestedOneWithoutPostsInputSchemaObject)
});
