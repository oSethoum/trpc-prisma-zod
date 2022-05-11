import { z } from 'zod';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';;
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';;
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';;
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';;
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';;
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';;
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';;
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';;
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';;
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';;
import { IntNullableWithAggregatesFilterSchemaObject } from './IntNullableWithAggregatesFilter.schema';;
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';

export const PostScalarWhereWithAggregatesInputSchemaObject = {
    AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema))]) ,
  OR: z.array(z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema)),
  NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema))]) ,
  id: z.union([z.object(IntWithAggregatesFilterSchemaObject),
z.number()]) ,
  createdAt: z.object(DateTimeWithAggregatesFilterSchemaObject) ,
  updatedAt: z.object(DateTimeWithAggregatesFilterSchemaObject) ,
  title: z.union([z.object(StringWithAggregatesFilterSchemaObject),
z.string()]) ,
  content: z.union([z.object(StringNullableWithAggregatesFilterSchemaObject),
z.string()]) ,
  published: z.union([z.object(BoolWithAggregatesFilterSchemaObject),
z.boolean()]) ,
  viewCount: z.union([z.object(IntWithAggregatesFilterSchemaObject),
z.number()]) ,
  authorId: z.union([z.object(IntNullableWithAggregatesFilterSchemaObject),
z.number()]) 
};

export const PostScalarWhereWithAggregatesInputObjectSchema = z.object({
    AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema))]) ,  OR: z.array(z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema)),  NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema))]) ,  id: z.union([z.object(IntWithAggregatesFilterSchemaObject),
z.number()]) ,  createdAt: z.object(DateTimeWithAggregatesFilterSchemaObject) ,  updatedAt: z.object(DateTimeWithAggregatesFilterSchemaObject) ,  title: z.union([z.object(StringWithAggregatesFilterSchemaObject),
z.string()]) ,  content: z.union([z.object(StringNullableWithAggregatesFilterSchemaObject),
z.string()]) ,  published: z.union([z.object(BoolWithAggregatesFilterSchemaObject),
z.boolean()]) ,  viewCount: z.union([z.object(IntWithAggregatesFilterSchemaObject),
z.number()]) ,  authorId: z.union([z.object(IntNullableWithAggregatesFilterSchemaObject),
z.number()]) 
});
