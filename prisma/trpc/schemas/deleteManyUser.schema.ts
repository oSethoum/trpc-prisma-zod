import { z } from 'zod';
import { UserWhereInputSchemaObject } from './objects/UserWhereInput.schema'

export const UserDeleteManySchema = z.object({ where: z.object(UserWhereInputSchemaObject)  }).required()