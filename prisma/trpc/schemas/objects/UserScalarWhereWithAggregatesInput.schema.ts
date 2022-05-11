import { z } from 'zod';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';;
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';;
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';;
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';;
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';;
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

export const UserScalarWhereWithAggregatesInputSchemaObject = {
    AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema))]) ,
  OR: z.array(z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema))]) ,
  id: z.union([z.object(IntWithAggregatesFilterSchemaObject),
z.number()]) ,
  email: z.union([z.object(StringWithAggregatesFilterSchemaObject),
z.string()]) ,
  name: z.union([z.object(StringNullableWithAggregatesFilterSchemaObject),
z.string()]) 
};

export const UserScalarWhereWithAggregatesInputObjectSchema = z.object({
    AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema))]) ,  OR: z.array(z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)),  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
z.array(z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema))]) ,  id: z.union([z.object(IntWithAggregatesFilterSchemaObject),
z.number()]) ,  email: z.union([z.object(StringWithAggregatesFilterSchemaObject),
z.string()]) ,  name: z.union([z.object(StringNullableWithAggregatesFilterSchemaObject),
z.string()]) 
});
