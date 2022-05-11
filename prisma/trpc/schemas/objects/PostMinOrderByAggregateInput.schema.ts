import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PostMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  published: SortOrderSchema,
  viewCount: SortOrderSchema,
  authorId: SortOrderSchema
};

export const PostMinOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  title: SortOrderSchema,  content: SortOrderSchema,  published: SortOrderSchema,  viewCount: SortOrderSchema,  authorId: SortOrderSchema
});
