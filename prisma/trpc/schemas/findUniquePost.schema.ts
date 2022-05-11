import { z } from 'zod';
import { PostWhereUniqueInputSchemaObject } from './objects/PostWhereUniqueInput.schema'

export const PostFindUniqueSchema = z.object({ where: z.object(PostWhereUniqueInputSchemaObject) }).required()