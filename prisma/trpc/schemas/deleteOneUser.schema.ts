import { z } from 'zod';
import { UserWhereUniqueInputSchemaObject } from './objects/UserWhereUniqueInput.schema'

export const UserDeleteOneSchema = z.object({ where: z.object(UserWhereUniqueInputSchemaObject)  }).required()