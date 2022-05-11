import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';

export const UserUpdateManyMutationInputSchemaObject = {
    email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,
  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) 
};

export const UserUpdateManyMutationInputObjectSchema = z.object({
    email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) 
});
