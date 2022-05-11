import { z } from 'zod';
import { PostScalarWhereInputSchemaObject } from './PostScalarWhereInput.schema';;
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';;
import { PostUpdateManyMutationInputSchemaObject } from './PostUpdateManyMutationInput.schema';;
import { PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';;
import { PostUncheckedUpdateManyWithoutPostsInputSchemaObject } from './PostUncheckedUpdateManyWithoutPostsInput.schema';;
import { PostUncheckedUpdateManyWithoutPostsInputObjectSchema } from './PostUncheckedUpdateManyWithoutPostsInput.schema';

export const PostUpdateManyWithWhereWithoutAuthorInputSchemaObject = {
    where: z.object(PostScalarWhereInputSchemaObject),
  data: z.union([z.object(PostUpdateManyMutationInputSchemaObject),
z.object(PostUncheckedUpdateManyWithoutPostsInputSchemaObject)]) 
};

export const PostUpdateManyWithWhereWithoutAuthorInputObjectSchema = z.object({
    where: z.object(PostScalarWhereInputSchemaObject),  data: z.union([z.object(PostUpdateManyMutationInputSchemaObject),
z.object(PostUncheckedUpdateManyWithoutPostsInputSchemaObject)]) 
});
