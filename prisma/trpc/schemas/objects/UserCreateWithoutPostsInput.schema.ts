import { z } from 'zod';


export const UserCreateWithoutPostsInputSchemaObject = {
    email: z.string(),
  name: z.string() 
};

export const UserCreateWithoutPostsInputObjectSchema = z.object({
    email: z.string(),  name: z.string() 
});
