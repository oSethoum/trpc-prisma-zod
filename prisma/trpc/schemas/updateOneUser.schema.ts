import { z } from 'zod';
import { UserUpdateInputSchemaObject } from './objects/UserUpdateInput.schema';
import { UserWhereUniqueInputSchemaObject } from './objects/UserWhereUniqueInput.schema'

export const UserUpdateOneSchema = z.object({ data: z.object(UserUpdateInputSchemaObject), where: z.object(UserWhereUniqueInputSchemaObject)  }).required()