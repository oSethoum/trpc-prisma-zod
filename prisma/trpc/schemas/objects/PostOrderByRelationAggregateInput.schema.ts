import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const PostOrderByRelationAggregateInputSchemaObject = {
    _count: SortOrderSchema.optional()
};

export const PostOrderByRelationAggregateInputObjectSchema = z.object({
    _count: SortOrderSchema.optional()
});
