import { z } from 'zod';
import { IntFilterSchemaObject } from './IntFilter.schema';;
import { IntFilterObjectSchema } from './IntFilter.schema';;
import { StringFilterSchemaObject } from './StringFilter.schema';;
import { StringFilterObjectSchema } from './StringFilter.schema';;
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';;
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';;
import { PostListRelationFilterSchemaObject } from './PostListRelationFilter.schema';;
import { PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';

export const UserWhereInputSchemaObject = {
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema),
z.array(z.lazy(() => UserWhereInputObjectSchema))]) ,
  OR: z.array(z.lazy(() => UserWhereInputObjectSchema)),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema),
z.array(z.lazy(() => UserWhereInputObjectSchema))]) ,
  id: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,
  email: z.union([z.object(StringFilterSchemaObject),
z.string()]) ,
  name: z.union([z.object(StringNullableFilterSchemaObject),
z.string()]) ,
  posts: z.object(PostListRelationFilterSchemaObject)
};

export const UserWhereInputObjectSchema = z.object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema),
z.array(z.lazy(() => UserWhereInputObjectSchema))]) ,  OR: z.array(z.lazy(() => UserWhereInputObjectSchema)),  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema),
z.array(z.lazy(() => UserWhereInputObjectSchema))]) ,  id: z.union([z.object(IntFilterSchemaObject),
z.number()]) ,  email: z.union([z.object(StringFilterSchemaObject),
z.string()]) ,  name: z.union([z.object(StringNullableFilterSchemaObject),
z.string()]) ,  posts: z.object(PostListRelationFilterSchemaObject)
});
