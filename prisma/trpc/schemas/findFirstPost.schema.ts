import { z } from 'zod';
import { PostWhereInputSchemaObject } from './objects/PostWhereInput.schema';
import { PostOrderByWithRelationInputSchemaObject } from './objects/PostOrderByWithRelationInput.schema';
import { PostWhereUniqueInputSchemaObject } from './objects/PostWhereUniqueInput.schema';
import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema'

export const PostFindFirstSchema = z.object({ where: z.object(PostWhereInputSchemaObject), orderBy: z.object(PostOrderByWithRelationInputSchemaObject), cursor: z.object(PostWhereUniqueInputSchemaObject), take: z.number(), skip: z.number(), distinct: z.array(PostScalarFieldEnumSchema) })