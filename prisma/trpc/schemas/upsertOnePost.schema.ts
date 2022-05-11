import { z } from 'zod';
import { PostWhereUniqueInputSchemaObject } from './objects/PostWhereUniqueInput.schema';
import { PostCreateInputSchemaObject } from './objects/PostCreateInput.schema';
import { PostUpdateInputSchemaObject } from './objects/PostUpdateInput.schema'

export const PostUpsertSchema = z.object({ where: z.object(PostWhereUniqueInputSchemaObject), data: z.object(PostCreateInputSchemaObject), update: z.object(PostUpdateInputSchemaObject)  }).required()