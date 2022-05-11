import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';

export const UserUpdateWithoutPostsInputSchemaObject = {
    email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,
  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) 
};

export const UserUpdateWithoutPostsInputObjectSchema = z.object({
    email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) 
});
