import { z } from 'zod';
import { PostWhereUniqueInputSchemaObject } from './objects/PostWhereUniqueInput.schema'

export const PostDeleteOneSchema = z.object({ where: z.object(PostWhereUniqueInputSchemaObject)  }).required()