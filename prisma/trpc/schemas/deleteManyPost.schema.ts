import { z } from 'zod';
import { PostWhereInputSchemaObject } from './objects/PostWhereInput.schema'

export const PostDeleteManySchema = z.object({ where: z.object(PostWhereInputSchemaObject)  }).required()