import { z } from 'zod';
import { UserUpdateWithoutPostsInputSchemaObject } from './UserUpdateWithoutPostsInput.schema';;
import { UserUpdateWithoutPostsInputObjectSchema } from './UserUpdateWithoutPostsInput.schema';;
import { UserUncheckedUpdateWithoutPostsInputSchemaObject } from './UserUncheckedUpdateWithoutPostsInput.schema';;
import { UserUncheckedUpdateWithoutPostsInputObjectSchema } from './UserUncheckedUpdateWithoutPostsInput.schema';;
import { UserCreateWithoutPostsInputSchemaObject } from './UserCreateWithoutPostsInput.schema';;
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputSchemaObject } from './UserUncheckedCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';

export const UserUpsertWithoutPostsInputSchemaObject = {
    update: z.union([z.object(UserUpdateWithoutPostsInputSchemaObject),
z.object(UserUncheckedUpdateWithoutPostsInputSchemaObject)]) .optional(),
  create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional()
};

export const UserUpsertWithoutPostsInputObjectSchema = z.object({
    update: z.union([z.object(UserUpdateWithoutPostsInputSchemaObject),
z.object(UserUncheckedUpdateWithoutPostsInputSchemaObject)]) .optional(),  create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional()
});
