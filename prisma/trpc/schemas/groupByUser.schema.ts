import { z } from 'zod';
import { UserWhereInputSchemaObject } from './objects/UserWhereInput.schema';
import { UserOrderByWithAggregationInputSchemaObject } from './objects/UserOrderByWithAggregationInput.schema';
import { UserScalarWhereWithAggregatesInputSchemaObject } from './objects/UserScalarWhereWithAggregatesInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema'

export const UserGroupBySchema = z.object({ where: z.object(UserWhereInputSchemaObject), orderBy: z.object(UserOrderByWithAggregationInputSchemaObject), having: z.object(UserScalarWhereWithAggregatesInputSchemaObject), take: z.number(), skip: z.number(), by: z.array(UserScalarFieldEnumSchema)  })