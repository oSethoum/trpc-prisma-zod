import { z } from 'zod';
import { PostWhereUniqueInputSchemaObject } from './PostWhereUniqueInput.schema';;
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';;
import { PostUpdateWithoutAuthorInputSchemaObject } from './PostUpdateWithoutAuthorInput.schema';;
import { PostUpdateWithoutAuthorInputObjectSchema } from './PostUpdateWithoutAuthorInput.schema';;
import { PostUncheckedUpdateWithoutAuthorInputSchemaObject } from './PostUncheckedUpdateWithoutAuthorInput.schema';;
import { PostUncheckedUpdateWithoutAuthorInputObjectSchema } from './PostUncheckedUpdateWithoutAuthorInput.schema';;
import { PostCreateWithoutAuthorInputSchemaObject } from './PostCreateWithoutAuthorInput.schema';;
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputSchemaObject } from './PostUncheckedCreateWithoutAuthorInput.schema';;
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';

export const PostUpsertWithWhereUniqueWithoutAuthorInputSchemaObject = {
    where: z.object(PostWhereUniqueInputSchemaObject),
  update: z.union([z.object(PostUpdateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedUpdateWithoutAuthorInputSchemaObject)]) .optional(),
  create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject)]) .optional()
};

export const PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = z.object({
    where: z.object(PostWhereUniqueInputSchemaObject),  update: z.union([z.object(PostUpdateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedUpdateWithoutAuthorInputSchemaObject)]) .optional(),  create: z.union([z.object(PostCreateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedCreateWithoutAuthorInputSchemaObject)]) .optional()
});
