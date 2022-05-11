import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';;
import { PostOrderByRelationAggregateInputSchemaObject } from './PostOrderByRelationAggregateInput.schema';;
import { PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  posts: z.object(PostOrderByRelationAggregateInputSchemaObject)
};

export const UserOrderByWithRelationInputObjectSchema = z.object({
    id: SortOrderSchema,  email: SortOrderSchema,  name: SortOrderSchema,  posts: z.object(PostOrderByRelationAggregateInputSchemaObject)
});
