import { z } from 'zod';
import { UserWhereUniqueInputSchemaObject } from './objects/UserWhereUniqueInput.schema';
import { UserCreateInputSchemaObject } from './objects/UserCreateInput.schema';
import { UserUpdateInputSchemaObject } from './objects/UserUpdateInput.schema'

export const UserUpsertSchema = z.object({ where: z.object(UserWhereUniqueInputSchemaObject), data: z.object(UserCreateInputSchemaObject), update: z.object(UserUpdateInputSchemaObject)  }).required()