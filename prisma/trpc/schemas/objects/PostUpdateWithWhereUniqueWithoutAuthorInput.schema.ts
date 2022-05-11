import { z } from 'zod';
import { PostWhereUniqueInputSchemaObject } from './PostWhereUniqueInput.schema';;
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';;
import { PostUpdateWithoutAuthorInputSchemaObject } from './PostUpdateWithoutAuthorInput.schema';;
import { PostUpdateWithoutAuthorInputObjectSchema } from './PostUpdateWithoutAuthorInput.schema';;
import { PostUncheckedUpdateWithoutAuthorInputSchemaObject } from './PostUncheckedUpdateWithoutAuthorInput.schema';;
import { PostUncheckedUpdateWithoutAuthorInputObjectSchema } from './PostUncheckedUpdateWithoutAuthorInput.schema';

export const PostUpdateWithWhereUniqueWithoutAuthorInputSchemaObject = {
    where: z.object(PostWhereUniqueInputSchemaObject),
  data: z.union([z.object(PostUpdateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedUpdateWithoutAuthorInputSchemaObject)]) 
};

export const PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = z.object({
    where: z.object(PostWhereUniqueInputSchemaObject),  data: z.union([z.object(PostUpdateWithoutAuthorInputSchemaObject),
z.object(PostUncheckedUpdateWithoutAuthorInputSchemaObject)]) 
});
