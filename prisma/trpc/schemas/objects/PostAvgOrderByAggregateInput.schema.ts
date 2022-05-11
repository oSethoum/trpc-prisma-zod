import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PostAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  viewCount: SortOrderSchema,
  authorId: SortOrderSchema
};

export const PostAvgOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  viewCount: SortOrderSchema,  authorId: SortOrderSchema
});
