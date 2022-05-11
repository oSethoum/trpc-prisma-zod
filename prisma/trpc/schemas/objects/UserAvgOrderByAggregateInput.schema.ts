import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema
};

export const UserAvgOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema
});
