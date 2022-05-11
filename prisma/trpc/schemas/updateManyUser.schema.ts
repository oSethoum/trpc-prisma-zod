import { z } from 'zod';
import { UserUpdateManyMutationInputSchemaObject } from './objects/UserUpdateManyMutationInput.schema';
import { UserWhereInputSchemaObject } from './objects/UserWhereInput.schema'

export const UserUpdateManySchema = z.object({ data: z.object(UserUpdateManyMutationInputSchemaObject), where: z.object(UserWhereInputSchemaObject)  }).required()