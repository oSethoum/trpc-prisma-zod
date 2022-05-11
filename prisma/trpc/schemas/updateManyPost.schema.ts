import { z } from 'zod';
import { PostUpdateManyMutationInputSchemaObject } from './objects/PostUpdateManyMutationInput.schema';
import { PostWhereInputSchemaObject } from './objects/PostWhereInput.schema'

export const PostUpdateManySchema = z.object({ data: z.object(PostUpdateManyMutationInputSchemaObject), where: z.object(PostWhereInputSchemaObject)  }).required()