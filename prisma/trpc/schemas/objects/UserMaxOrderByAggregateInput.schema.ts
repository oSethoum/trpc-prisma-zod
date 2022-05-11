import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema
};

export const UserMaxOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  email: SortOrderSchema,  name: SortOrderSchema
});
