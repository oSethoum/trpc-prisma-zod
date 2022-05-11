import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';;
import { UserCountOrderByAggregateInputSchemaObject } from './UserCountOrderByAggregateInput.schema';;
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';;
import { UserAvgOrderByAggregateInputSchemaObject } from './UserAvgOrderByAggregateInput.schema';;
import { UserAvgOrderByAggregateInputObjectSchema } from './UserAvgOrderByAggregateInput.schema';;
import { UserMaxOrderByAggregateInputSchemaObject } from './UserMaxOrderByAggregateInput.schema';;
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';;
import { UserMinOrderByAggregateInputSchemaObject } from './UserMinOrderByAggregateInput.schema';;
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';;
import { UserSumOrderByAggregateInputSchemaObject } from './UserSumOrderByAggregateInput.schema';;
import { UserSumOrderByAggregateInputObjectSchema } from './UserSumOrderByAggregateInput.schema';

export const UserOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  name: SortOrderSchema,
  _count: z.object(UserCountOrderByAggregateInputSchemaObject).optional(),
  _avg: z.object(UserAvgOrderByAggregateInputSchemaObject),
  _max: z.object(UserMaxOrderByAggregateInputSchemaObject).optional(),
  _min: z.object(UserMinOrderByAggregateInputSchemaObject).optional(),
  _sum: z.object(UserSumOrderByAggregateInputSchemaObject)
};

export const UserOrderByWithAggregationInputObjectSchema = z.object({
    id: SortOrderSchema,  email: SortOrderSchema,  name: SortOrderSchema,  _count: z.object(UserCountOrderByAggregateInputSchemaObject).optional(),  _avg: z.object(UserAvgOrderByAggregateInputSchemaObject),  _max: z.object(UserMaxOrderByAggregateInputSchemaObject).optional(),  _min: z.object(UserMinOrderByAggregateInputSchemaObject).optional(),  _sum: z.object(UserSumOrderByAggregateInputSchemaObject)
});
