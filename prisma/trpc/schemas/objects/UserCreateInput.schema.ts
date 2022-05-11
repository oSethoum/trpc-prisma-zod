import { z } from 'zod';
import { PostCreateNestedManyWithoutAuthorInputSchemaObject } from './PostCreateNestedManyWithoutAuthorInput.schema';;
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';

export const UserCreateInputSchemaObject = {
    email: z.string(),
  name: z.string() ,
  posts: z.object(PostCreateNestedManyWithoutAuthorInputSchemaObject)
};

export const UserCreateInputObjectSchema = z.object({
    email: z.string(),  name: z.string() ,  posts: z.object(PostCreateNestedManyWithoutAuthorInputSchemaObject)
});
