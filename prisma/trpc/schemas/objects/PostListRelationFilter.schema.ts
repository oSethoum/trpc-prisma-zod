import { z } from 'zod';
import { PostWhereInputSchemaObject } from './PostWhereInput.schema';;
import { PostWhereInputObjectSchema } from './PostWhereInput.schema';

export const PostListRelationFilterSchemaObject = {
    every: z.object(PostWhereInputSchemaObject),
  some: z.object(PostWhereInputSchemaObject),
  none: z.object(PostWhereInputSchemaObject)
};

export const PostListRelationFilterObjectSchema = z.object({
    every: z.object(PostWhereInputSchemaObject),  some: z.object(PostWhereInputSchemaObject),  none: z.object(PostWhereInputSchemaObject)
});
