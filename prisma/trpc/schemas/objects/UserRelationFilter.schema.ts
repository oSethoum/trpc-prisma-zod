import { z } from 'zod';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';;
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

export const UserRelationFilterSchemaObject = {
    is: z.object(UserWhereInputSchemaObject) ,
  isNot: z.object(UserWhereInputSchemaObject) 
};

export const UserRelationFilterObjectSchema = z.object({
    is: z.object(UserWhereInputSchemaObject) ,  isNot: z.object(UserWhereInputSchemaObject) 
});
