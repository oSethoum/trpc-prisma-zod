import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';;
import { PostCountOrderByAggregateInputSchemaObject } from './PostCountOrderByAggregateInput.schema';;
import { PostCountOrderByAggregateInputObjectSchema } from './PostCountOrderByAggregateInput.schema';;
import { PostAvgOrderByAggregateInputSchemaObject } from './PostAvgOrderByAggregateInput.schema';;
import { PostAvgOrderByAggregateInputObjectSchema } from './PostAvgOrderByAggregateInput.schema';;
import { PostMaxOrderByAggregateInputSchemaObject } from './PostMaxOrderByAggregateInput.schema';;
import { PostMaxOrderByAggregateInputObjectSchema } from './PostMaxOrderByAggregateInput.schema';;
import { PostMinOrderByAggregateInputSchemaObject } from './PostMinOrderByAggregateInput.schema';;
import { PostMinOrderByAggregateInputObjectSchema } from './PostMinOrderByAggregateInput.schema';;
import { PostSumOrderByAggregateInputSchemaObject } from './PostSumOrderByAggregateInput.schema';;
import { PostSumOrderByAggregateInputObjectSchema } from './PostSumOrderByAggregateInput.schema';

export const PostOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  content: SortOrderSchema,
  published: SortOrderSchema,
  viewCount: SortOrderSchema,
  authorId: SortOrderSchema,
  _count: z.object(PostCountOrderByAggregateInputSchemaObject).optional(),
  _avg: z.object(PostAvgOrderByAggregateInputSchemaObject),
  _max: z.object(PostMaxOrderByAggregateInputSchemaObject).optional(),
  _min: z.object(PostMinOrderByAggregateInputSchemaObject).optional(),
  _sum: z.object(PostSumOrderByAggregateInputSchemaObject)
};

export const PostOrderByWithAggregationInputObjectSchema = z.object({
    id: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  title: SortOrderSchema,  content: SortOrderSchema,  published: SortOrderSchema,  viewCount: SortOrderSchema,  authorId: SortOrderSchema,  _count: z.object(PostCountOrderByAggregateInputSchemaObject).optional(),  _avg: z.object(PostAvgOrderByAggregateInputSchemaObject),  _max: z.object(PostMaxOrderByAggregateInputSchemaObject).optional(),  _min: z.object(PostMinOrderByAggregateInputSchemaObject).optional(),  _sum: z.object(PostSumOrderByAggregateInputSchemaObject)
});
