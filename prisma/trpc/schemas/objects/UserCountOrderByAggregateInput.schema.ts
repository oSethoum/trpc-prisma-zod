import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema
};

export const UserCountOrderByAggregateInputObjectSchema = z.object({
    id: SortOrderSchema,  email: SortOrderSchema,  name: SortOrderSchema
});
