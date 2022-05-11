import { z } from 'zod';
import { UserCreateWithoutPostsInputSchemaObject } from './UserCreateWithoutPostsInput.schema';;
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputSchemaObject } from './UserUncheckedCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';;
import { UserCreateOrConnectWithoutPostsInputSchemaObject } from './UserCreateOrConnectWithoutPostsInput.schema';;
import { UserCreateOrConnectWithoutPostsInputObjectSchema } from './UserCreateOrConnectWithoutPostsInput.schema';;
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';;
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

export const UserCreateNestedOneWithoutPostsInputSchemaObject = {
    create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional(),
  connectOrCreate: z.object(UserCreateOrConnectWithoutPostsInputSchemaObject).optional(),
  connect: z.object(UserWhereUniqueInputSchemaObject).optional()
};

export const UserCreateNestedOneWithoutPostsInputObjectSchema = z.object({
    create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional(),  connectOrCreate: z.object(UserCreateOrConnectWithoutPostsInputSchemaObject).optional(),  connect: z.object(UserWhereUniqueInputSchemaObject).optional()
});
