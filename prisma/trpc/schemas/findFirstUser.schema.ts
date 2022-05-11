import { z } from 'zod';
import { UserWhereInputSchemaObject } from './objects/UserWhereInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereUniqueInputSchemaObject } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema'

export const UserFindFirstSchema = z.object({ where: z.object(UserWhereInputSchemaObject), orderBy: z.object(UserOrderByWithRelationInputSchemaObject), cursor: z.object(UserWhereUniqueInputSchemaObject), take: z.number(), skip: z.number(), distinct: z.array(UserScalarFieldEnumSchema) })