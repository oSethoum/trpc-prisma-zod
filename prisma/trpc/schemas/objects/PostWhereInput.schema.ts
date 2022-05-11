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
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';;
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';;
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';;
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';;
import { IntNullableFilterSchemaObject } from './IntNullableFilter.schema';;
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

export const PostWhereInputSchemaObject = {
    AND: z.union([z.lazy(() => PostWhereInputObjectSchema),
z.array(z.lazy(() => PostWhereInputObjectSchema))]) ,
  OR: z.array(z.lazy(() => PostWhereInputObjectSchema)),
  NOT: z.union([z.lazy(() => PostWhereInputObjectSchema),
z.array(z.lazy(() => PostWhereInputObjectSchema))]) ,
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
  author: z.union([z.object(UserRelationFilterSchemaObject),
z.object(UserWhereInputSchemaObject)]) ,
  authorId: z.union([z.object(IntNullableFilterSchemaObject),
z.number()]) 
};

export const PostWhereInputObjectSchema = z.object({
    AND: z.union([z.lazy(() => PostWhereInputObjectSchema),
z.array(z.lazy(() => PostWhereInputObjectSchema))]) ,  OR: z.array(z.lazy(() => PostWhereInputObjectSchema)),  NOT: z.union([z.lazy(() => PostWhereInputObjectSchema),
z.array(z.lazy(() => PostWhereInputObjectSchema))]) ,  id: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,  createdAt: z.object(DateTimeFilterSchemaObject) ,  updatedAt: z.object(DateTimeFilterSchemaObject) ,  title: z.union([z.object(StringFilterSchemaObject),
z.string()]) ,  content: z.union([z.object(StringNullableFilterSchemaObject),
z.string()]) ,  published: z.union([z.object(BoolFilterSchemaObject),
z.boolean()]) ,  viewCount: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,  author: z.union([z.object(UserRelationFilterSchemaObject),
z.object(UserWhereInputSchemaObject)]) ,  authorId: z.union([z.object(IntNullableFilterSchemaObject),
z.number()]) 
});
