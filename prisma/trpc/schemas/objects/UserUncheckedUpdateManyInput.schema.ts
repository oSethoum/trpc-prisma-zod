import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';;
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';

export const UserUncheckedUpdateManyInputSchemaObject = {
    id: z.union([z.number(),
z.object(IntFieldUpdateOperationsInputSchemaObject)]) ,
  email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,
  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) 
};

export const UserUncheckedUpdateManyInputObjectSchema = z.object({
    id: z.union([z.number(),
z.object(IntFieldUpdateOperationsInputSchemaObject)]) ,  email: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,  name: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) 
});
