import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PostMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  published: SortOrderSchema,
  viewCount: SortOrderSchema,
  authorId: SortOrderSchema
};

export const PostMaxOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  title: SortOrderSchema,  content: SortOrderSchema,  published: SortOrderSchema,  viewCount: SortOrderSchema,  authorId: SortOrderSchema
});
