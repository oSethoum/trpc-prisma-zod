import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';;
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';;
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

export const PostOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  published: SortOrderSchema,
  viewCount: SortOrderSchema,
  author: z.object(UserOrderByWithRelationInputSchemaObject),
  authorId: SortOrderSchema
};

export const PostOrderByWithRelationInputObjectSchema = z.object({
    id: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  title: SortOrderSchema,  content: SortOrderSchema,  published: SortOrderSchema,  viewCount: SortOrderSchema,  author: z.object(UserOrderByWithRelationInputSchemaObject),  authorId: SortOrderSchema
});
