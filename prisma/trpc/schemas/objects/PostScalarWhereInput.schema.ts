import { z } from 'zod';
import { IntFilterSchemaObject } from './IntFilter.schema';;
import { IntFilterObjectSchema } from './IntFilter.schema';;
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';;
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';;
import { StringFilterSchemaObject } from './StringFilter.schema';;
import { StringFilterObjectSchema } from './StringFilter.schema';;
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';;
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';;
import { BoolFilterSchemaObject } from './BoolFilter.schema';;
import { BoolFilterObjectSchema } from './BoolFilter.schema';;
import { IntNullableFilterSchemaObject } from './IntNullableFilter.schema';;
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

export const PostScalarWhereInputSchemaObject = {
    AND: z.union([z.lazy(() => PostScalarWhereInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereInputObjectSchema))]) ,
  OR: z.array(z.lazy(() => PostScalarWhereInputObjectSchema)),
  NOT: z.union([z.lazy(() => PostScalarWhereInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereInputObjectSchema))]) ,
  id: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,
  createdAt: z.object(DateTimeFilterSchemaObject) ,
  updatedAt: z.object(DateTimeFilterSchemaObject) ,
  title: z.union([z.object(StringFilterSchemaObject),
z.string()]) ,
  content: z.union([z.object(StringNullableFilterSchemaObject),
z.string()]) ,
  published: z.union([z.object(BoolFilterSchemaObject),
z.boolean()]) ,
  viewCount: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,
  authorId: z.union([z.object(IntNullableFilterSchemaObject),
z.number()]) 
};

export const PostScalarWhereInputObjectSchema = z.object({
    AND: z.union([z.lazy(() => PostScalarWhereInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereInputObjectSchema))]) ,  OR: z.array(z.lazy(() => PostScalarWhereInputObjectSchema)),  NOT: z.union([z.lazy(() => PostScalarWhereInputObjectSchema),
z.array(z.lazy(() => PostScalarWhereInputObjectSchema))]) ,  id: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,  createdAt: z.object(DateTimeFilterSchemaObject) ,  updatedAt: z.object(DateTimeFilterSchemaObject) ,  title: z.union([z.object(StringFilterSchemaObject),
z.string()]) ,  content: z.union([z.object(StringNullableFilterSchemaObject),
z.string()]) ,  published: z.union([z.object(BoolFilterSchemaObject),
z.boolean()]) ,  viewCount: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,  authorId: z.union([z.object(IntNullableFilterSchemaObject),
z.number()]) 
});
