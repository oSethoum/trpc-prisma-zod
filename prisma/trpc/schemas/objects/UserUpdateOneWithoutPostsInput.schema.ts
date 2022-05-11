import { z } from 'zod';
import { UserCreateWithoutPostsInputSchemaObject } from './UserCreateWithoutPostsInput.schema';;
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputSchemaObject } from './UserUncheckedCreateWithoutPostsInput.schema';;
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';;
import { UserCreateOrConnectWithoutPostsInputSchemaObject } from './UserCreateOrConnectWithoutPostsInput.schema';;
import { UserCreateOrConnectWithoutPostsInputObjectSchema } from './UserCreateOrConnectWithoutPostsInput.schema';;
import { UserUpsertWithoutPostsInputSchemaObject } from './UserUpsertWithoutPostsInput.schema';;
import { UserUpsertWithoutPostsInputObjectSchema } from './UserUpsertWithoutPostsInput.schema';;
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';;
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';;
import { UserUpdateWithoutPostsInputSchemaObject } from './UserUpdateWithoutPostsInput.schema';;
import { UserUpdateWithoutPostsInputObjectSchema } from './UserUpdateWithoutPostsInput.schema';;
import { UserUncheckedUpdateWithoutPostsInputSchemaObject } from './UserUncheckedUpdateWithoutPostsInput.schema';;
import { UserUncheckedUpdateWithoutPostsInputObjectSchema } from './UserUncheckedUpdateWithoutPostsInput.schema';

export const UserUpdateOneWithoutPostsInputSchemaObject = {
    create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional(),
  connectOrCreate: z.object(UserCreateOrConnectWithoutPostsInputSchemaObject).optional(),
  upsert: z.object(UserUpsertWithoutPostsInputSchemaObject).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.object(UserWhereUniqueInputSchemaObject).optional(),
  update: z.union([z.object(UserUpdateWithoutPostsInputSchemaObject),
z.object(UserUncheckedUpdateWithoutPostsInputSchemaObject)]) .optional()
};

export const UserUpdateOneWithoutPostsInputObjectSchema = z.object({
    create: z.union([z.object(UserCreateWithoutPostsInputSchemaObject),
z.object(UserUncheckedCreateWithoutPostsInputSchemaObject)]) .optional(),  connectOrCreate: z.object(UserCreateOrConnectWithoutPostsInputSchemaObject).optional(),  upsert: z.object(UserUpsertWithoutPostsInputSchemaObject).optional(),  disconnect: z.boolean().optional(),  delete: z.boolean().optional(),  connect: z.object(UserWhereUniqueInputSchemaObject).optional(),  update: z.union([z.object(UserUpdateWithoutPostsInputSchemaObject),
z.object(UserUncheckedUpdateWithoutPostsInputSchemaObject)]) .optional()
});
