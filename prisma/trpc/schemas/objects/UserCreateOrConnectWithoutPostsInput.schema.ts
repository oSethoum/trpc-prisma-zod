import { z } from 'zod';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';;
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';;
import { UserCreateWithoutPostsInputSchemaObject } from './UserCreateWithoutPostsInput.schema';;
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputSchemaObject } from './UserUncheckedCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';

export const UserCreateOrConnectWithoutPostsInputSchemaObject = {
    where: z.object(UserWhereUniqueInputSchemaObject),
  create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional()
};

export const UserCreateOrConnectWithoutPostsInputObjectSchema = z.object({
    where: z.object(UserWhereUniqueInputSchemaObject),  create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional()
});
