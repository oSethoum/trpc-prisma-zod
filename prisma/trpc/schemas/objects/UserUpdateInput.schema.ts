import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';;
import { PostUpdateManyWithoutAuthorInputSchemaObject } from './PostUpdateManyWithoutAuthorInput.schema';;
import { PostUpdateManyWithoutAuthorInputObjectSchema } from './PostUpdateManyWithoutAuthorInput.schema';

export const UserUpdateInputSchemaObject = {
    email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,
  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) ,
  posts: z.object(PostUpdateManyWithoutAuthorInputSchemaObject)
};

export const UserUpdateInputObjectSchema = z.object({
    email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) ,  posts: z.object(PostUpdateManyWithoutAuthorInputSchemaObject)
});
