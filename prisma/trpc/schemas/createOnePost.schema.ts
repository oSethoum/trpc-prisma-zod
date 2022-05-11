import { z } from 'zod';
import { PostCreateInputSchemaObject } from './objects/PostCreateInput.schema'

export const PostCreateSchema = z.object({ data: z.object(PostCreateInputSchemaObject)  }).required()