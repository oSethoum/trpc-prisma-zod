import { z } from 'zod';
import { UserCreateInputSchemaObject } from './objects/UserCreateInput.schema'

export const UserCreateSchema = z.object({ data: z.object(UserCreateInputSchemaObject)  }).required()