import { z } from 'zod';
import { PostWhereInputSchemaObject } from './objects/PostWhereInput.schema';
import { PostOrderByWithAggregationInputSchemaObject } from './objects/PostOrderByWithAggregationInput.schema';
import { PostScalarWhereWithAggregatesInputSchemaObject } from './objects/PostScalarWhereWithAggregatesInput.schema';
import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema'

export const PostGroupBySchema = z.object({ where: z.object(PostWhereInputSchemaObject), orderBy: z.object(PostOrderByWithAggregationInputSchemaObject), having: z.object(PostScalarWhereWithAggregatesInputSchemaObject), take: z.number(), skip: z.number(), by: z.array(PostScalarFieldEnumSchema)  })