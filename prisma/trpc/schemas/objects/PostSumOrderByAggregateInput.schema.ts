import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PostSumOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  viewCount: SortOrderSchema,
  authorId: SortOrderSchema
};

export const PostSumOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  viewCount: SortOrderSchema,  authorId: SortOrderSchema
});
