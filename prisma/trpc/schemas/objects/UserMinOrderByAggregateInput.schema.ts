import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema
};

export const UserMinOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  email: SortOrderSchema,  name: SortOrderSchema
});
