import { z } from 'zod';
import { PostUpdateInputSchemaObject } from './objects/PostUpdateInput.schema';
import { PostWhereUniqueInputSchemaObject } from './objects/PostWhereUniqueInput.schema'

export const PostUpdateOneSchema = z.object({ data: z.object(PostUpdateInputSchemaObject), where: z.object(PostWhereUniqueInputSchemaObject)  }).required()