import { createRouter } from "./helpers/createRouter";

import { PostFindUniqueSchema } from "../schemas/findUniquePost.schema";
import { PostFindFirstSchema } from "../schemas/findFirstPost.schema";
import { PostFindManySchema } from "../schemas/findManyPost.schema";
import { PostCreateSchema } from "../schemas/createOnePost.schema";
import { PostDeleteOneSchema } from "../schemas/deleteOnePost.schema";
import { PostUpdateOneSchema } from "../schemas/updateOnePost.schema";
import { PostDeleteManySchema } from "../schemas/deleteManyPost.schema";
import { PostUpdateManySchema } from "../schemas/updateManyPost.schema";
import { PostUpsertSchema } from "../schemas/upsertOnePost.schema";
import { PostAggregateSchema } from "../schemas/aggregatePost.schema";
import { PostGroupBySchema } from "../schemas/groupByPost.schema";

export const postsRouter = createRouter()

  .mutation("findUniquePost", {
    input: PostFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniquePost = await ctx.prisma.post.findUnique(input);
      return findUniquePost;
    },
  })

  .mutation("findFirstPost", {
    input: PostFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstPost = await ctx.prisma.post.findFirst(input);
      return findFirstPost;
    },
  })

  .mutation("findManyPost", {
    input: PostFindManySchema,
    async resolve({ ctx, input }) {
      const findManyPost = await ctx.prisma.post.findMany(input);
      return findManyPost;
    },
  })

  .mutation("createOnePost", {
    input: PostCreateSchema,
    async resolve({ ctx, input }) {
      const createOnePost = await ctx.prisma.post.create(input);
      return createOnePost;
    },
  })

  .mutation("deleteOnePost", {
    input: PostDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOnePost = await ctx.prisma.post.delete(input);
      return deleteOnePost;
    },
  })

  .mutation("updateOnePost", {
    input: PostUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOnePost = await ctx.prisma.post.update(input);
      return updateOnePost;
    },
  })

  .mutation("deleteManyPost", {
    input: PostDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyPost = await ctx.prisma.post.deleteMany(input);
      return deleteManyPost;
    },
  })

  .mutation("updateManyPost", {
    input: PostUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyPost = await ctx.prisma.post.updateMany(input);
      return updateManyPost;
    },
  })

  .mutation("upsertOnePost", {
    input: PostUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOnePost = await ctx.prisma.post.upsert(input);
      return upsertOnePost;
    },
  })

  .mutation("aggregatePost", {
    input: PostAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregatePost = await ctx.prisma.post.aggregate(input);
      return aggregatePost;
    },
  })

  .mutation("groupByPost", {
    input: PostGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByPost = await ctx.prisma.post.groupBy(input);
      return groupByPost;
    },
  })

