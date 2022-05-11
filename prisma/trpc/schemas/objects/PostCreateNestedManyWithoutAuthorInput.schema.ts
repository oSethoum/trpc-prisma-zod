import { z } from 'zod';
import { PostCreateWithoutAuthorInputSchemaObject } from './PostCreateWithoutAuthorInput.schema';;
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputSchemaObject } from './PostUncheckedCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';;
import { PostCreateOrConnectWithoutAuthorInputSchemaObject } from './PostCreateOrConnectWithoutAuthorInput.schema';;
import { PostCreateOrConnectWithoutAuthorInputObjectSchema } from './PostCreateOrConnectWithoutAuthorInput.schema';;
import { PostWhereUniqueInputSchemaObject } from './PostWhereUniqueInput.schema';;
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

export const PostCreateNestedManyWithoutAuthorInputSchemaObject = {
    create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateWithoutAuthorInputSchemaObject)),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject))]) .optional(),
  connectOrCreate: z.union([z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject))]) .optional(),
  connect: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional()
};

export const PostCreateNestedManyWithoutAuthorInputObjectSchema = z.object({
    create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateWithoutAuthorInputSchemaObject)),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject),
z.array(z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject))]) .optional(),  connectOrCreate: z.union([z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject),
z.array(z.object(PostCreateOrConnectWithoutAuthorInputSchemaObject))]) .optional(),  connect: z.union([z.object(PostWhereUniqueInputSchemaObject),
z.array(z.object(PostWhereUniqueInputSchemaObject))]) .optional()
});
