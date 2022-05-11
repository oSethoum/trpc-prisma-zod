import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';;
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';;
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';;
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';;
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';;
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

export const PostUpdateManyMutationInputSchemaObject = {
    createdAt: z.object(DateTimeFieldUpdateOperationsInputSchemaObject) ,
  updatedAt: z.object(DateTimeFieldUpdateOperationsInputSchemaObject) ,
  title: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,
  content: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) ,
  published: z.union([z.boolean(),
z.object(BoolFieldUpdateOperationsInputSchemaObject)]) ,
  viewCount: z.union([z.number(),
z.object(IntFieldUpdateOperationsInputSchemaObject)]) 
};

export const PostUpdateManyMutationInputObjectSchema = z.object({
    createdAt: z.object(DateTimeFieldUpdateOperationsInputSchemaObject) ,  updatedAt: z.object(DateTimeFieldUpdateOperationsInputSchemaObject) ,  title: z.union([z.string(),
z.object(StringFieldUpdateOperationsInputSchemaObject)]) ,  content: z.union([z.string(),
z.object(NullableStringFieldUpdateOperationsInputSchemaObject)]) ,  published: z.union([z.boolean(),
z.object(BoolFieldUpdateOperationsInputSchemaObject)]) ,  viewCount: z.union([z.number(),
z.object(IntFieldUpdateOperationsInputSchemaObject)]) 
});
