import { z } from 'zod';
import { PostUncheckedCreateNestedManyWithoutAuthorInputSchemaObject } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema';;
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema';

export const UserUncheckedCreateInputSchemaObject = {
    id: z.number().optional(),
  email: z.string(),
  name: z.string() ,
  posts: z.object(PostUncheckedCreateNestedManyWithoutAuthorInputSchemaObject)
};

export const UserUncheckedCreateInputObjectSchema = z.object({
    id: z.number().optional(),  email: z.string(),  name: z.string() ,  posts: z.object(PostUncheckedCreateNestedManyWithoutAuthorInputSchemaObject)
});
