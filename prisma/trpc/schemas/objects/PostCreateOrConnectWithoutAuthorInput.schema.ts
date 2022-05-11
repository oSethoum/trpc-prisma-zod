import { z } from 'zod';
import { PostWhereUniqueInputSchemaObject } from './PostWhereUniqueInput.schema';;
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';;
import { PostCreateWithoutAuthorInputSchemaObject } from './PostCreateWithoutAuthorInput.schema';;
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputSchemaObject } from './PostUncheckedCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';

export const PostCreateOrConnectWithoutAuthorInputSchemaObject = {
    where: z.object(PostWhereUniqueInputSchemaObject),
  create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject)]) .optional()
};

export const PostCreateOrConnectWithoutAuthorInputObjectSchema = z.object({
    where: z.object(PostWhereUniqueInputSchemaObject),  create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject)]) .optional()
});
