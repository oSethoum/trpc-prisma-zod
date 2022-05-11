import { z } from 'zod';
import { PostCreateWithoutAuthorInputSchemaObject } from './PostCreateWithoutAuthorInput.schema';;
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputSchemaObject } from './PostUncheckedCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';;
import { PostCreateOrConnectWithoutAuthorInputSchemaObject } from './PostCreateOrConnectWithoutAuthorInput.schema';;
import { PostCreateOrConnectWithoutAuthorInputObjectSchema } from './PostCreateOrConnectWithoutAuthorInput.schema';;
import { PostUpsertWithWhereUniqueWithoutAuthorInputSchemaObject } from './PostUpsertWithWhereUniqueWithoutAuthorInput.schema';;
import { PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutAuthorInput.schema';;
import { PostWhereUniqueInputSchemaObject } from './PostWhereUniqueInput.schema';;
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';;
import { PostUpdateWithWhereUniqueWithoutAuthorInputSchemaObject } from './PostUpdateWithWhereUniqueWithoutAuthorInput.schema';;
import { PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutAuthorInput.schema';;
import { PostUpdateManyWithWhereWithoutAuthorInputSchemaObject } from './PostUpdateManyWithWhereWithoutAuthorInput.schema';;
import { PostUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './PostUpdateManyWithWhereWithoutAuthorInput.schema';;
import { PostScalarWhereInputSchemaObject } from './PostScalarWhereInput.schema';;
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';

export const PostUpdateManyWithoutAuthorInputSchemaObject = {
    create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateWithoutAuthorInputSchemaObject)),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject))]) .optional(),
  connectOrCreate: z.union([z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject))]) .optional(),
  upsert: z.union([z.object(PostUpsertWithWhereUniqueWithoutAuthorInputSchemaObject),
z.array(z.object(PostUpsertWithWhereUniqueWithoutAuthorInputSchemaObject))]) .optional(),
  set: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),
  disconnect: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),
  delete: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),
  connect: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),
  update: z.union([z.object(PostUpdateWithWhereUniqueWithoutAuthorInputSchemaObject),
z.array(z.object(PostUpdateWithWhereUniqueWithoutAuthorInputSchemaObject))]) .optional(),
  updateMany: z.union([z.object(PostUpdateManyWithWhereWithoutAuthorInputSchemaObject),
z.array(z.object(PostUpdateManyWithWhereWithoutAuthorInputSchemaObject))]) .optional(),
  deleteMany: z.union([z.object(PostScalarWhereInputSchemaObject),
z.array(z.object(PostScalarWhereInputSchemaObject))]) .optional()
};

export const PostUpdateManyWithoutAuthorInputObjectSchema = z.object({
    create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateWithoutAuthorInputSchemaObject)),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject))]) .optional(),  connectOrCreate: z.union([z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject))]) .optional(),  upsert: z.union([z.object(PostUpsertWithWhereUniqueWithoutAuthorInputSchemaObject),
z.array(z.object(PostUpsertWithWhereUniqueWithoutAuthorInputSchemaObject))]) .optional(),  set: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),  disconnect: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),  delete: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),  connect: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional(),  update: z.union([z.object(PostUpdateWithWhereUniqueWithoutAuthorInputSchemaObject),
z.array(z.object(PostUpdateWithWhereUniqueWithoutAuthorInputSchemaObject))]) .optional(),  updateMany: z.union([z.object(PostUpdateManyWithWhereWithoutAuthorInputSchemaObject),
z.array(z.object(PostUpdateManyWithWhereWithoutAuthorInputSchemaObject))]) .optional(),  deleteMany: z.union([z.object(PostScalarWhereInputSchemaObject),
z.array(z.object(PostScalarWhereInputSchemaObject))]) .optional()
});
